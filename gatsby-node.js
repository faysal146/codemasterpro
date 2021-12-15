const path = require('path');

const staticPathTemplate = path.resolve('./src/templates/static-pages.jsx');
const courseTemplate = path.resolve('./src/templates/courses.jsx');
const coursesListTemplate = path.resolve('./src/templates/courses-list.jsx');
const coursesByCategoryTemplate = path.resolve('./src/templates/categories.jsx');
const coursesByTagTemplate = path.resolve('./src/templates/tags.jsx');

const staticPageGQL = `
    query StaticPageQuery {
        allFile(
            filter: {
                sourceInstanceName: { eq: "staticPages" }
                ext: { eq: ".mdx" }
            }
        ) {
            edges {
                node {
                    childMdx {
                        frontmatter {
                            slug
                        }
                    }
                    name
                }
            }
        }
    }
`;

const coursesQueryGQL = `
   query CoursesQuery {
        allFile(
            filter: {sourceInstanceName: {eq: "courses"}, ext: {eq: ".mdx"}}
            sort: {fields: childrenMdx___frontmatter___createdAt, order: DESC}
            limit: 100
        ) {
            edges {
                node {
                    slug: name
                    childMdx {
                        frontmatter {
                            tags
                            categories {
                                name
                                routerPath
                            }
                        }
                    }
                }
            }
        }
    }
`;

const relatedPostQueryBuilder = `
    query RelatedPostQuery($catgory: String, $slug: String) {
        allFile(
            filter: {
                sourceInstanceName: { eq: "courses" }
                childMdx: {
                    frontmatter: {
                        categories: { elemMatch: { routerPath: { eq: $catgory } } }
                    }
                }
                name: { ne: $slug }
            }
            limit: 3
            sort: { fields: childrenMdx___frontmatter___createdAt, order: DESC }
        ) {
            edges {
                node {
                    course: childMdx {
                        frontmatter {
                            title
                            description
                            tags
                            image {
                                childImageSharp {
                                    gatsbyImageData(
                                        quality: 85
                                        width: 400
                                        placeholder: BLURRED
                                    )
                                }
                            }
                            featured
                            createdAt(formatString: "MMMM Do YYYY")
                            updatedAt(formatString: "MMMM Do YYYY")
                        }
                        excerpt(truncate: true, pruneLength: 120)
                    }
                    name
                    id
                }
            }
        }
    }
`;

const postsPerPage = 10;

exports.createPages = async function ({ actions, graphql }) {
    // create static page like: aboutus, privacy-policy pages
    const staticPagesQuery = await graphql(staticPageGQL);
    const staticPages = staticPagesQuery.data.allFile.edges;
    staticPages.forEach(({ node: page }) => {
        const slug = page.name;
        actions.createPage({
            path: slug,
            component: staticPathTemplate,
            context: { slug }
        });
    });

    const categories = []; // {name:"some value", routerPath:"path/to/category"}
    let tags = [];

    // create course page
    const coursesQuery = await graphql(coursesQueryGQL);
    const coursesList = coursesQuery.data.allFile.edges;
    coursesList.forEach(({ node: course }) => {
        const {
            slug,
            childMdx: { frontmatter }
        } = course;
        const coursesCategory = frontmatter.categories;
        const relatedPosts = {};
        if (coursesCategory && Array.isArray(coursesCategory)) {
            coursesCategory.forEach(async (cat) => {
                categories.push(cat.routerPath);
                const result = await graphql(relatedPostQueryBuilder, {
                    catgories: cat.routerPath,
                    slug
                });
                if (result && result.data) {
                    relatedPosts[cat.name] = result.data.allFile.edges;
                }
            });
        } else console.log(`${slug} no category found`);

        tags = [...tags, ...frontmatter.tags];

        actions.createPage({
            path: slug,
            component: courseTemplate,
            context: {
                slug,
                categories: coursesCategory || [],
                relatedPosts
            }
        });
    });

    // index page with courses content

    const numPages = Math.ceil(coursesList.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
        actions.createPage({
            path: i === 0 ? `/` : `/courses/${i + 1}`,
            component: coursesListTemplate,
            context: {
                limit: postsPerPage,
                skip: i * postsPerPage,
                numPages,
                currentPage: i + 1
            }
        });
    });

    // courses by category
    const countCategories = categories.reduce((prev, curr) => {
        prev[curr] = (prev[curr] || 0) + 1;
        return prev;
    }, {});

    const allCategories = Object.keys(countCategories);

    allCategories.forEach((cat, i) => {
        const link = `/categories/${cat}`;

        Array.from({
            length: Math.ceil(countCategories[cat] / postsPerPage)
        }).forEach((_, i) => {
            actions.createPage({
                path: i === 0 ? link : `${link}/${i + 1}`,
                component: coursesByCategoryTemplate,
                context: {
                    allCategories,
                    category: cat, // category routerPath
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    currentPage: i + 1,
                    numPages: Math.ceil(countCategories[cat] / postsPerPage)
                }
            });
        });
    });

    // courses by tags

    const countTags = tags.reduce((prev, curr) => {
        prev[curr] = (prev[curr] || 0) + 1;
        return prev;
    }, {});
    const allTags = Object.keys(countTags);

    allTags.forEach((tg) => {
        const link = `/tags/${tg.toLowerCase().split(' ').join('-')}`;

        Array.from({
            length: Math.ceil(countTags[tg] / postsPerPage)
        }).forEach((_, i) => {
            actions.createPage({
                path: i === 0 ? link : `${link}/${i + 1}`,
                component: coursesByTagTemplate,
                context: {
                    allTags,
                    tag: tg,
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    currentPage: i + 1,
                    numPages: Math.ceil(countTags[tg] / postsPerPage)
                }
            });
        });
    });
};
