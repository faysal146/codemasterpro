import React from 'react';
import { graphql } from 'gatsby';

import SEO from 'components/codemaster/seo';

// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import Pagination from 'components/codemaster/pagination';
import PostFlat from 'components/courses/post-flat';
import PostBox from 'components/courses/post-box';

import WithSiderbar from 'layouts/with-sidebar';

let sliderActive = false
// eslint-disable-next-line func-names
const CoursesListTemplate = function ({ data, pageContext }) {
    if (!sliderActive) {
        SwiperCore.use([Navigation]);
        sliderActive = true
    }
    SwiperCore.use([Navigation]);
    const courses = data.courses.edges;
    const featuredCourses = data.featuredCourses.edges;
    return (
        <WithSiderbar>
            <SEO />
            <div>
                <h2 className="main-page-title">Featured Courses</h2>
                <Swiper spaceBetween={20} slidesPerView="auto" navigation>
                    {featuredCourses.map(({ node }) => (
                        <SwiperSlide key={node.id} className="codemaster-slider">
                            <PostBox
                                {...node.course.frontmatter}
                                excerpt={node.course.excerpt}
                                slug={node.name}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-10" id="courses-list">
                <h2 className="main-page-title">All Courses</h2>
                <div className="w-full">
                    <div className="flex flex-col space-y-10">
                        {courses.map(({ node }) => (
                            <PostFlat
                                {...node.course.frontmatter}
                                excerpt={node.course.excerpt}
                                slug={node.name}
                                key={node.id}
                            />
                        ))}
                    </div>
                    <Pagination
                        numPages={pageContext.numPages}
                        currentPage={pageContext.currentPage}
                        pathPrefix="/courses"
                        indexPagePathPerfix="/"
                    />
                </div>
            </div>
        </WithSiderbar>
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
                    ...CourseFragment
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
                        ...FeaturedCourseFragment
                }
            }
        }
    }
`;

