import React, { useContext, useEffect, useState, Suspense } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { ScreenContext } from 'context/screen-context';
import Modal from 'components/modal';
import AlgoliaSearch from './codemaster/Algolia-Search'

// const AlgoliaSearch = React.lazy(() => import('./codemaster/Algolia-Search'));

const responsive = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
};

const Navigation = function () {
    const isLargeScreen = useContext(ScreenContext);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        if (showSearch) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showSearch]);

    useEffect(() => {
        if (isLargeScreen) {
            setShowSearch(false);
        }
    }, [isLargeScreen]);

    const toggleSearch = React.useCallback((val) => () => setShowSearch(val), []);

    const { categories: categoriesNodes } = useStaticQuery(graphql`
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
    const [categories, setCategories] = useState({
        navCategories: [],
        moreCategories: []
    });
    const [showMoreNavItem, setShowMoreNavItem] = useState(false);
    useEffect(() => {
        const categoriesNodesTrns = categoriesNodes.edges.map(({ node }) => node);
        const injectNav = () => {
            const { innerWidth } = window;

            const getItems = (num) => ({
                navCategories: categoriesNodesTrns.slice(0, num),
                moreCategories: categoriesNodesTrns.slice(num)
            });

            if (innerWidth >= responsive['2xl']) {
                setCategories(getItems(13));
            } else if (innerWidth >= responsive.xl) {
                setCategories(getItems(11));
            } else if (innerWidth >= responsive.lg) {
                setCategories(getItems(9));
            } else if (innerWidth >= responsive.md) {
                setCategories(getItems(7));
            } else if (innerWidth >= responsive.sm) {
                setCategories(getItems(5));
            } else {
                setCategories(getItems(2));
            }
        };
        injectNav();
        window.addEventListener('resize', injectNav);
        return () => {
            window.removeEventListener('resize', injectNav);
        };
    }, [categoriesNodes]);

    return (
        // <Suspense fallback={<div>Loading...</div>}>
        <nav className="container relative mx-auto px-2 bg-gray-800 rounded justify-between flex my-3 font-bold text-emerald-300 lg:text-lg">
            {!isLargeScreen && (
                <Modal isOpen={showSearch}>
                    <div
                        className="fixed top-0 left-0 w-screen h-screen bg-gray-800 opacity-70 z-40"
                        onClick={toggleSearch(false)}
                    />
                    <div className="py-8 px-12 z-50 bg-gray-800 rounded shadow-lg fixed top-24 w-full max-w-[400px] left-1/2 transform -translate-x-1/2">
                        <AlgoliaSearch />
                    </div>
                </Modal>
            )}

            <ul className="flex py-2 relative w-full items-center">
                <Link className="py-2 px-2 inline-block hover:bg-gray-900 rounded" to="/">
                    Home
                </Link>
                {categories.navCategories.map((node) => (
                    <Link
                        key={node.name}
                        className="py-2 px-2 md:px-3 inline-block hover:bg-gray-900 rounded"
                        to={`/categories/${node.routerPath}`}
                        data-targetid={node.routerPath}
                    >
                        {node.name}
                    </Link>
                ))}
                {categories.moreCategories.length ? (
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setShowMoreNavItem((prev) => !prev)}
                            className="py-2 px-2 md:px-3 inline-flex hover:bg-gray-900 rounded font-bold items-center"
                        >
                            <span className="mr-1">More</span>
                            {showMoreNavItem ? (
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="-5 -7.5 24 24"
                                        width="24"
                                        fill="currentColor"
                                    >
                                        <path d="M7.071 2.828l-4.95 4.95A1 1 0 0 1 .707 6.364L6.364.707a1 1 0 0 1 1.414 0l5.657 5.657a1 1 0 0 1-1.414 1.414l-4.95-4.95z" />
                                    </svg>
                                </span>
                            ) : (
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="-5 -8 24 24"
                                        width="24"
                                        fill="currentColor"
                                    >
                                        <path d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z" />
                                    </svg>
                                </span>
                            )}
                        </button>
                        <div
                            className="absolute flex flex-col space-y-4 bg-gray-800 shadow-md mt-3 p-4 rounded z-20 w-44 right-0"
                            style={{ display: showMoreNavItem ? 'flex' : 'none' }}
                        >
                            {categories.moreCategories.map((node) => (
                                <Link
                                    key={node.name}
                                    className="py-2 px-2 md:px-3 inline-block hover:bg-gray-900 rounded"
                                    to={`/categories/${node.routerPath}`}
                                    data-targetid={node.routerPath}
                                >
                                    {node.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : null}
                {!isLargeScreen && (
                    <button
                        type="button"
                        onClick={toggleSearch(true)}
                        className="block rounded px-2 self-stretch text-white bg-emerald-500 ml-auto"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-2.5 -2.5 24 24"
                            width="24"
                            fill="currentColor"
                        >
                            <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z" />
                        </svg>
                    </button>
                )}
            </ul>
        </nav>
        // </Suspense>
    );
};

export default Navigation;
