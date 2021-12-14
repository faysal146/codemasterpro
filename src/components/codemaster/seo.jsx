/* eslint-disable react/require-default-props */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const SEO = function ({ title, meta, description, keywords, image, url }) {
    const { site } = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    author
                    description
                    keywords
                    siteUrl
                    title
                    image
                    siteUrl
                    siteName
                }
            }
        }
    `);
    const siteKeywords = keywords || site.siteMetadata.keywords;
    const metaDescription = description || site.siteMetadata.description;
    const defaultTitle = site.siteMetadata.title;
    const siteImage = image || site.siteMetadata.image;
    const siteUrl = url || site.siteMetadata.siteUrl;

    return (
        <Helmet
            htmlAttributes={{
                lang: 'en'
            }}
            title={title || defaultTitle}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    name: `keywords`,
                    content: siteKeywords
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:image`,
                    content: siteImage
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:image`,
                    content: siteImage
                },
                {
                    property: `og:type`,
                    content: `article`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author || ``
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                },
                {
                    name: 'og:url',
                    content: siteUrl
                },
                {
                    name: 'og:site_name',
                    content: site.siteMetadata.siteName
                }
            ].concat(meta || [])}
        />
    );
};
export default SEO;

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string,
    // eslint-disable-next-line react/require-default-props
    meta: PropTypes.arrayOf(PropTypes.object),
    image: PropTypes.string
};
