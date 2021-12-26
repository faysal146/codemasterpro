import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

import SEO from 'components/codemaster/seo';

import Layout from 'layouts/layout';


import 'styles/static-page.scss';

const StaticPages = function ({ data }) {
    const {
        childMdx: { body, frontmatter }
    } = data.file;
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <main className="my-10 py-6 px-4 mx-auto md:w-5/6 lg:4/6">
                <h1 className="text-center text-2xl md:text-3xl font-extrabold my-8">
                    {frontmatter.title}
                </h1>
                <section className="p-4 site-page text-gray-400">
                    <MDXRenderer>{body}</MDXRenderer>
                </section>
            </main>
        </Layout>
    );
};

export const query = graphql`
    query StaticPageQuery($slug: String!) {
        file(name: { eq: $slug }) {
            name
            childMdx {
                body
                frontmatter {
                    title
                }
            }
        }
    }
`;


export default StaticPages;
