import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { WithSideBar } from 'layouts/layout';
import * as coursesStyle from 'styles/courses.module.scss';
import SEO from 'components/codemaster/seo';
import { MDXProvider } from '@mdx-js/react';
import DownloadBTN from 'components/courses/download-btn';
import SocialShare from 'components/codemaster/social-share';
import PostBoxSM from 'components/courses/post-box-sm';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { isMobile } from 'react-device-detect';

SwiperCore.use([Navigation]);

const shortcodes = { DownloadBTN };

const Courses = function ({ data, pageContext }) {
    const { body, frontmatter, timeToRead } = data.file.childMdx;
    const thumbimage = getImage(frontmatter.image);
    const ogImage = frontmatter.image.childImageSharp.ogImage.src;
    const tags = frontmatter.tags || [];
    const articalTag = tags.map((tg) => ({
        name: `article:tag`,
        content: tg
    }));
    const pageMetatag = [
        ...articalTag,
    ]
    pageContext.categories.forEach(item => {
        pageMetatag.push({
            name: `article:section`,
            content: item.name
        })
    })
    const relatedPostsKeys = Object.keys(pageContext.relatedPosts)
    let pageUrl
    if (typeof window === "undefined") {
        pageUrl = ''
    } else {
        pageUrl = window.location.href
    }
    return (
        <MDXProvider components={shortcodes}>
            <WithSideBar>
                <SEO
                    title={frontmatter.title}
                    description={frontmatter.description}
                    keywords={frontmatter.keywords}
                    meta={pageMetatag}
                    image={ogImage}
                />
                <article className="mx-auto max-w-7xl text-sm md:text-base mb-8">
                    <div className="w-full mx-auto mb-8 text-left">
                        <div className="">
                            <h1
                                className="mb-3 text-xl md:text-3xl font-bold text-gray-300"
                                itemProp="headline"
                            >
                                {frontmatter.title}
                            </h1>
                            <p className="text-base text-gray-400">
                                {/* TODO: add calander icon */}
                                {frontmatter.createdAt} —
                                <span className="text-green-400">CodeMaster</span>
                                {/* TODO: add clock icon */}
                                <span className="ml-2">Time To Read: {timeToRead} Minute</span>
                            </p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex items-center mb-6 space-x-2 text-gray-400">
                            <p className="">Share this article</p>
                            <SocialShare title={frontmatter.title} url={pageUrl} twitterHandle="some" tags={tags} />
                        </div>
                        <div className="my-8 md:my-10 flex justify-center">
                            <GatsbyImage image={thumbimage} alt={frontmatter.title} />
                        </div>
                    </div>

                    <div
                        className={`w-full mx-auto text-gray-300 md:p-4 ${coursesStyle.coursesContent}`}
                    >
                        <MDXRenderer>{body}</MDXRenderer>
                    </div>
                    <div className="flex flex-wrap">
                        {tags.map((tg) => (
                            <Link
                                className="py-1 px-2 bg-green-500 text-white rounded ml-2 mt-2 inline-block capitalize shadow-md"
                                key={tg}
                                to={`/tags/${tg.toLowerCase().split(' ').join('-')}`}
                            >
                                {tg}
                            </Link>
                        ))}
                    </div>
                </article>
                <section className=''>
                    {
                        relatedPostsKeys.length && relatedPostsKeys.map(postkey => (
                            <div key={postkey} className='mb-3 py-6 px-3 bg-gray-800 rounded shadow-md'>
                                <h3 className='mb-2 text-lg text-green-400'>More {postkey} Courses</h3>
                                <Swiper spaceBetween={5} slidesPerView="auto" navigation>
                                    {pageContext.relatedPosts[postkey].map(({ node }) => (
                                        <SwiperSlide key={node.id} style={{ width: isMobile ? '250px' : '280px' }}>
                                            <PostBoxSM {...node.course.frontmatter} slug={node.name} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        ))
                    }
                </section>
            </WithSideBar>
        </MDXProvider>
    );
};

export const query = graphql`
    query CourseQuery($slug: String!) {
        file(name: { eq: $slug }, sourceInstanceName: { eq: "courses" }) {
            name
            childMdx {
                body
                frontmatter {
                    createdAt(formatString: "MMMM Do YYYY")
                    description
                    tags
                    title
                    keywords
                    featured
                    categories {
                        name
                        routerPath
                    }
                    updatedAt(formatString: "MMMM Do YYYY")
                    image {
                        childImageSharp {
                            gatsbyImageData(
                                quality: 90
                                width: 600
                                placeholder: BLURRED
                                formats: AUTO
                            )
                            ogImage: fixed(width: 1200, height: 627) {
                                src
                            }
                        }
                    }
                }
                timeToRead
                id
            }
        }
    }
`;

export default Courses;
