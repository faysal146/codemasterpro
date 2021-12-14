const path = require('path');
const AlgoliaQueries = require('./algolia-queries');

require('dotenv').config({
    path: `.env`
});

module.exports = {
    siteMetadata: {
        siteName: 'CodeMaster',
        siteUrl: 'https://codemasterpro.netlify.app/',
        title: 'Download Premium Courses for Free',
        description: `Download Paid Premium Courses for Free. Learn Hacking, Programming, IT & Software, Free Online Courses, and more.`,
        author: `Faysal Ahmed`,
        keywords: `free courses, programming, web development, android development, codemaster, ios development, online courses, paid courses, it & softwere, online free courses, download courses, hacking`,
        image: `/codemaster.png`
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-postcss',
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'test'
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png'
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        `gatsby-plugin-mdx`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/'
            },
            __key: 'images'
        },
        {
            resolve: 'gatsby-plugin-anchor-links',
            options: {
                offset: -30,
                duration: 100
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'coursesImage',
                path: './contents/images'
            },
            __key: 'coursesImage'
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/'
            },
            __key: 'pages'
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'courses',
                path: './contents/courses'
            },
            __key: 'courses'
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'staticPages',
                path: './contents/static-pages'
            },
            __key: 'staticPages'
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'codemaster',
                path: './codemaster'
            },
            __key: 'codemaster'
        },
        {
            resolve: `gatsby-plugin-google-fonts-v2`,
            options: {
                fonts: [
                    {
                        family: `Poppins`
                        //   weights: ['100', '400']
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                components: path.join(__dirname, './src/components'),
                layouts: path.join(__dirname, './src/layouts'),
                assets: path.join(__dirname, './assets'),
                styles: path.join(__dirname, './src/styles')
            }
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/ // See below to configure properly
                }
            }
        },
        {
            resolve: `gatsby-plugin-algolia`,
            options: {
                appId: process.env.GATSBY_ALGOLIA_APP_ID,
                apiKey: process.env.ALGOLIA_ADMIN_KEY,
                queries: AlgoliaQueries
            }
        }
    ]
};
