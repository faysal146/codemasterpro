import React from 'react';
import { graphql } from 'gatsby';
import SEO from 'components/codemaster/seo';

import PostFlat from 'components/courses/post-flat';
import Pagination from 'components/codemaster/pagination';
import WithSiderbar from 'layouts/with-sidebar';

const CategoryTemplate = function ({ data, pageContext }) {
    const courses = data.courses.edges;
    const pathPrefix = `/tags/${pageContext.tag}`;
    return (
        <WithSiderbar>
            <SEO title={`Courses By ${pageContext.tag}`} />
            <div className="mt-10" id="courses-list">
                <h2 className="main-page-title uppercase">{pageContext.tag}</h2>
                <div className="w-full">
                    <div className="flex flex-col space-y-10">
                        {courses.map(({ node }) => (
                            <PostFlat {...node.course.frontmatter} excerpt={node.course.excerpt} slug={node.name} key={node.id} />
                        ))}
                    </div>
                    <Pagination
                        numPages={pageContext.numPages}
                        currentPage={pageContext.currentPage}
                        pathPrefix={pathPrefix}
                    />
                </div>
            </div>
        </WithSiderbar>
    );
};

export const query = graphql`
    query CoursesByTagsQuery($skip: Int, $limit: Int, $tag: String!) {
        courses: allFile(
            filter: {
                sourceInstanceName: { eq: "courses" }
                childMdx: { frontmatter: { tags: { in: [$tag] } } }
            }
            limit: $limit
            skip: $skip
            sort: { fields: childrenMdx___frontmatter___createdAt, order: DESC }
        ) {
            edges {
                node {
                    ...CourseFragment
                }
            }
        }
    }
`;

export default CategoryTemplate;
