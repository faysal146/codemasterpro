import React from 'react';
import { graphql } from 'gatsby';
import SEO from 'components/codemaster/seo';

// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import Pagination from 'components/codemaster/pagination';
import PostFlat from 'components/courses/post-flat';
import PostBox from 'components/courses/post-box';
import { WithSideBar } from 'layouts/layout';

import { isMobile } from 'react-device-detect';

SwiperCore.use([Navigation]);

// eslint-disable-next-line func-names
const CoursesListTemplate = function ({ data, pageContext }) {
    const courses = data.courses.edges;
    const featuredCourses = data.featuredCourses.edges;
    return (
        <WithSideBar>
            <SEO />
            <div>
                <h2 className="main-page-title">Featured Courses</h2>
                <Swiper spaceBetween={20} slidesPerView="auto" navigation>
                    {featuredCourses.map(({ node }) => (
                        <SwiperSlide key={node.id} style={{ width: isMobile ? '300px' : '350px' }}>
                            <PostBox {...node.course.frontmatter} slug={node.name} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-10" id="courses-list">
                <h2 className="main-page-title">All Courses</h2>
                <div className="w-full">
                    <div className="flex flex-col space-y-10">
                        {courses.map(({ node }) => (
                            <PostFlat {...node.course.frontmatter} slug={node.name} key={node.id} />
                        ))}
                    </div>
                    {/* BUG: Fix pagination whene go back 1 */}
                    <Pagination
                        numPages={pageContext.numPages}
                        currentPage={pageContext.currentPage}
                        pathPrefix="/courses"
                        indexPagePathPerfix="/"
                    />
                </div>
            </div>
        </WithSideBar>
    );
};
export default CoursesListTemplate;

export const query = graphql`
    query CoursesQuery($skip: Int! = 0, $limit: Int! = 2) {
        courses: allFile(
            filter: { sourceInstanceName: { eq: "courses" } }
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
        featuredCourses: allFile(
            filter: {
                sourceInstanceName: { eq: "courses" }
                childMdx: { frontmatter: { featured: { eq: true } } }
            }
            limit: 5
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
                            featured
                            createdAt(formatString: "MMMM Do YYYY")
                            updatedAt(formatString: "MMMM Do YYYY")
                        }
                    }
                    name
                    id
                }
            }
        }
    }
`;
