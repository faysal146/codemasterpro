import React from 'react';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const pagClasss =
    'cursor-pointer p-2 bg-gray-700 rounded text-emerald-300 inline-flex items-center justify-center w-11 shadow-md hover:bg-emerald-400 hover:text-gray-200 transition-all duration-150 ease-in-out';

const disabledPag =
    'p-2 bg-gray-700 rounded text-emerald-300 inline-flex items-center justify-center w-11 shadow-md opacity-70';

const activeClass =
    'p-2 rounded inline-flex items-center justify-center w-11 shadow-md bg-emerald-400 text-gray-200';

const PaginationLink = function ({ hasNextPage }) {
    if (hasNextPage) {
        return (
            <Link className={pagClasss} to={hasNextPage}>
                {' '}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-5 -5 24 24"
                    width="24"
                    fill="currentColor"
                >
                    <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z" />
                </svg>{' '}
            </Link>
        );
    }
    return (
        <span className={disabledPag}>
            {' '}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -5 24 24"
                width="24"
                fill="currentColor"
            >
                <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z" />
            </svg>{' '}
        </span>
    );
};
const PaginationLinkPrev = function ({ hasPrevPage }) {
    if (hasPrevPage) {
        return (
            <Link className={pagClasss} to={hasPrevPage}>
                {' '}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-5 -5 24 24"
                    width="24"
                    fill="currentColor"
                >
                    <path d="M3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2H3.414z" />
                </svg>{' '}
            </Link>
        );
    }
    return (
        <span className={disabledPag}>
            {' '}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -5 24 24"
                width="24"
                fill="currentColor"
            >
                <path d="M3.414 7.657l3.95 3.95A1 1 0 0 1 5.95 13.02L.293 7.364a.997.997 0 0 1 0-1.414L5.95.293a1 1 0 1 1 1.414 1.414l-3.95 3.95H13a1 1 0 0 1 0 2H3.414z" />
            </svg>{' '}
        </span>
    );
};
const DisableCurrentPage = function ({ currentPage, index, routePath }) {
    if (currentPage === index) {
        return <span className={activeClass}> {index} </span>;
    }
    return (
        <AnchorLink className={pagClasss} to={routePath}>
            {index}
        </AnchorLink>
    );
};

function getPath(path) {
    return `${path}#courses-list`;
}

const Pagination = function ({ numPages, currentPage, pathPrefix, indexPagePathPerfix }) {
    let prevPage;
    if (currentPage === 1) prevPage = false;
    else if (currentPage === 2) {
        prevPage = getPath(indexPagePathPerfix || pathPrefix);
    } else {
        prevPage = getPath(`${pathPrefix}/${currentPage - 1}`);
    }

    const nextPage = currentPage < numPages ? getPath(`${pathPrefix}/${currentPage + 1}`) : false;
    return (
        <ul className="flex mt-14 justify-center space-x-2">
            <li>
                <PaginationLinkPrev hasPrevPage={prevPage} />
            </li>
            {Array.from({ length: numPages }).map((_, i) => {
                const index = i + 1;
                return (
                    <li key={index}>
                        <DisableCurrentPage
                            currentPage={currentPage}
                            index={index}
                            routePath={
                                index > 1
                                    ? getPath(`${pathPrefix}/${index}`)
                                    : getPath(indexPagePathPerfix)
                            }
                        />
                    </li>
                );
            })}
            <li>
                <PaginationLink hasNextPage={nextPage} />
            </li>
        </ul>
    );
};

export default Pagination;
