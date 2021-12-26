import { Link } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
    connectStateResults,
    Highlight,
    Hits,
    Index,
    Snippet,
    PoweredBy
} from 'react-instantsearch-dom';

const HitCount = connectStateResults(({ searchResults }) => {
    const hitCount = searchResults && searchResults.nbHits;

    return hitCount > 0 ? (
        <div className="text-gray-400 py-2 px-3">
            Total {hitCount} result{hitCount !== 1 ? `s` : ``}
        </div>
    ) : null;
});

const PageHit = ({ hit }) => {
    const image = getImage(hit.image);
    return (
        <div className="p-2 my-2 bg-gray-800 rounded flex items-center">
            <GatsbyImage
                className="rounded mr-3 object-cover w-48 hidden lg:block"
                image={image}
                alt={hit.title}
            />
            <div>
                <h4 className="text-emerald-400 my-2 underline lg:text-lg">
                    <Link to={hit.slug}>
                        <Highlight attribute="title" hit={hit} tagName="mark" />
                    </Link>
                </h4>
                <Snippet
                    className="text-gray-400 text-sm lg:text-base"
                    attribute="description"
                    hit={hit}
                    tagName="mark"
                />
            </div>
        </div>
    );
};

const SearchResult = ({ handleClear }) => (
    <div className="absolute top-[calc(100%+15px)] lg:top-0 left-0 lg:left-auto lg:right-full z-20 bg-gray-800 lg:mr-3 rounded py-2 shadow-lg p-2 sm:w-full lg:w-[700px]">
        <Index indexName="courses">
            <div className="flex justify-between py-2">
                <HitCount />
                <button
                    type="button"
                    className="bg-red-400 text-gray-200 rounded text-sm px-2"
                    onClick={handleClear}
                >
                    Clear
                </button>
            </div>
            <Hits hitComponent={PageHit} />
        </Index>
        <PoweredBy className="p-2" />
    </div>
);

export default SearchResult;
