import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AlgoliaSearch from 'components/codemaster/Algolia-Search'
import Tag from './tags';

const Sidebar = function () {
    const { tags } = useStaticQuery(graphql`
        query MyQuery {
            tags: codemasterJson {
                tags
            }
        }
    `);

    return (
        <div className="space-y-8 bg-gray-800 p-6 rounded relative" id="search">
            <div className="space-y-2">
                <h2 className="font-semibold tracking-widest uppercase dark:text-coolGray-400">
                    Search Courses
                </h2>
                {/* <AlgoliaSearch /> */}
            </div>
            <div className="space-y-2">
                <h2 className="font-semibold tracking-widest uppercase mb-4">Tags</h2>
                <div className="py-2 px-3 flex flex-wrap">
                    {tags.tags.map((tag) => (
                        <Tag
                            routePath={tag.toLowerCase().split(' ').join('-')}
                            key={tag.toLowerCase().split(' ').join('-')}
                        >
                            {tag}
                        </Tag>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
