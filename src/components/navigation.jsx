import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import IntersectionObserverWrapper from 'components/codemaster/IntersectionObserverWrapper'


const Navigation = function () {
    const { categories } = useStaticQuery(graphql`
        query {
            categories: allCategoriesJson {
                edges {
                    node {
                        name
                        routerPath
                    }
                }
            }
            tags: codemasterJson {
                tags
            }
        }
    `);
    return (
        <nav
            className="container relative mx-auto px-4 bg-gray-800 rounded justify-between flex my-3 font-bold"
        >
            <ul className="flex py-2 relative w-full items-center">
                <Link className="py-2 px-3 inline-block hover:bg-gray-900 rounded" to="/">
                    Home
                </Link>
                <IntersectionObserverWrapper>
                    {
                        categories.edges.map(({ node }) => (
                            <Link
                                key={node.name}
                                className="py-2 px-2 md:px-3 inline-block hover:bg-gray-900 rounded"
                                to={`/categories/${node.routerPath}`}
                                data-targetid={node.routerPath}
                            >
                                {node.name}
                            </Link>
                        ))
                    }
                </IntersectionObserverWrapper>
            </ul>
        </nav>
    );
};

export default Navigation;
