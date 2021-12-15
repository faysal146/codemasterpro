import React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import WithSiderbar from 'layouts/with-sidebar';
import * as coursesStyle from 'styles/courses.module.scss';
import SEO from 'components/codemaster/seo';
import { MDXProvider } from '@mdx-js/react';
import DownloadBTN from 'components/courses/download-btn';
import SocialShare from 'components/codemaster/social-share';
import PostBoxSM from 'components/courses/post-box-sm';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

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
            <WithSiderbar>
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
                            <p className="text-base text-gray-400 flex-col justify-center space-y-2">
                                <span className='flex'>
                                    <svg className='inline-block mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="-2 -3 24 24" width="24" fill="currentColor"><path d="M17 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3v2a2 2 0 1 0 4 0V2h1v2a2 2 0 1 0 4 0V2h1v2a2 2 0 1 0 4 0V2zM3 8v2h2V8H3zm0 4v2h2v-2H3zm12 0v2h2v-2h-2zm0-4v2h2V8h-2zM7 8v2h2V8H7zm4 0v2h2V8h-2zm0 4v2h2v-2h-2zm-4 0v2h2v-2H7zM5 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zm-5 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1z" /></svg>
                                    <span>{frontmatter.createdAt}</span>
                                </span>


                                <span className="flex">
                                    <span className='inlin-block mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="24" fill="currentColor"><path d="M11 9h4a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v5zm-1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" /></svg>
                                    </span>
                                    <span>
                                        {timeToRead} Min
                                    </span> </span>
                                <span className="text-green-400"> - CodeMaster
                                </span>
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
                                className="py-1 px-2 bg-emerald-500 text-white rounded ml-2 mt-2 inline-block capitalize shadow-md"
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
                                <h3 className='mb-2 text-lg text-emerald-400'>More {postkey} Courses</h3>
                                <Swiper spaceBetween={5} slidesPerView="auto" navigation>
                                    {pageContext.relatedPosts[postkey].map(({ node }) => (
                                        <SwiperSlide key={node.id} className="relatedcourse-slider">
                                            <PostBoxSM {...node.course.frontmatter} excerpt={node.course.excerpt} slug={node.name} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        ))
                    }
                </section>
            </WithSiderbar>
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
