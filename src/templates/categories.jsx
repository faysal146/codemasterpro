import React from 'react';
import { graphql } from 'gatsby';

import PostFlat from 'components/courses/post-flat';
import Pagination from 'components/codemaster/pagination';
import { WithSideBar } from 'layouts/layout';
import SEO from 'components/codemaster/seo';

const CategoryTemplate = function ({ data, pageContext }) {
    const courses = data.courses.edges;
    const { category } = data;
    const pathPrefix = `/categories/${category.routerPath}`;
    return (
        <WithSideBar>
            <SEO title={`Courses By ${category.name}`} />
            <div className="mt-10" id="courses-list">
                <h2 className="main-page-title">{category.name}</h2>
                <div className="w-full">
                    <div className="flex flex-col space-y-10">
                        {courses.map(({ node }) => (
                            <PostFlat {...node.course.frontmatter} slug={node.name} key={node.id} />
                        ))}
                    </div>
                    <Pagination
                        numPages={pageContext.numPages}
                        currentPage={pageContext.currentPage}
                        pathPrefix={pathPrefix}
                    />
                </div>
            </div>
        </WithSideBar>
    );
};

export const query = graphql`
    query CoursesByCategoryQuery($skip: Int, $limit: Int, $category: String!) {
        courses: allFile(
            filter: {
                sourceInstanceName: { eq: "courses" }
                childMdx: {
                    frontmatter: { categories: { elemMatch: { routerPath: { eq: $category } } } }
                }
            }
            limit: $limit
            skip: $skip
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
                                    gatsbyImageData(quality: 85, width: 400, placeholder: BLURRED)
                                }
                            }
                            createdAt(formatString: "MMMM Do YYYY")
                            updatedAt(formatString: "MMMM Do YYYY")
                        }
                    }
                    name
                    id
                }
            }
        }
        category: categoriesJson(routerPath: { eq: $category }) {
            name
            routerPath
        }
    }
`;

export default CategoryTemplate;
