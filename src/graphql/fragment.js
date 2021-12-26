import { graphql } from 'gatsby';

export const CourseFragment = graphql`
    fragment CourseFragment on File {
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
            excerpt(truncate: true, pruneLength: 300)
        }
        name
        id
    }
`;

export const FeaturedCourseFragment = graphql`
    fragment FeaturedCourseFragment on File {
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
            excerpt(truncate: true, pruneLength: 130)
        }
        name
        id
    }
`;

export default {};
