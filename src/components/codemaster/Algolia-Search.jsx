import React, { useMemo, useState } from 'react';
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, connectSearchBox } from "react-instantsearch-dom"
import SearchResult from "components/codemaster/search-result"


const SearchBox = connectSearchBox(
    ({ refine, /* currentRefinement,  */ query, handleChange, onSubmit }) => {
        const handleSubmit = React.useCallback((e) => {
            e.preventDefault()
            refine(query)
            onSubmit(true)
        }, [query])
        return (
            <form className="aside-search flex" onSubmit={handleSubmit}>
                <input
                    className="py-2 px-2 w-full border rounded text-gray-700 focus:ring-green-400 focus:outline-none"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleChange}
                    value={query}
                />
                <button type="submit" className="block rounded ml-2 px-4 bg-emerald-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-2.5 -2.5 24 24"
                        width="24"
                        fill="currentColor"
                    >
                        <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z" />
                    </svg>
                </button>
            </form>
        )
    }
)

export default () => {
    const [query, setQuery] = useState('')
    const [showResult, setshowResult] = useState(false)

    const handleChange = React.useCallback((e) => {
        setQuery(e.target.value)
    }, [])
    const onSubmit = React.useCallback((val) => {
        setshowResult(val)
    }, [])
    const handleClear = React.useCallback(() => {
        setshowResult(false)
        setQuery('')
    }, [])
    const searchClient = useMemo(
        () =>
            algoliasearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
        []
    )
    return (
        <div>
            <InstantSearch
                searchClient={searchClient}
                indexName="courses"
            >
                <SearchBox query={query} handleChange={handleChange} onSubmit={onSubmit} />
                {
                    showResult && <SearchResult handleClear={handleClear} />
                }

            </InstantSearch>
        </div>
    )
}