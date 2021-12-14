import React from 'react';
import queryString from 'query-string'
import { navigate } from 'gatsby'

import SEO from 'components/codemaster/seo';
import { useLocation } from '@reach/router'

import Pagination from 'components/codemaster/pagination';
import PostFlat from 'components/courses/post-flat';
import PostBox from 'components/courses/post-box';
import { WithSideBar } from 'layouts/layout';


// eslint-disable-next-line func-names
const SearchPage = function () {
    const location = useLocation()
    const parsed = queryString.parse(location.search);

    if (!parsed.query) {
        navigate('/')
    }

    React.useEffect(() => {

    }, [])

    return (
        <WithSideBar>
            <SEO />
            <div className="mt-10" id="courses-list">
                <h2 className="main-page-title">Search Courses</h2>
                <div className="w-full">
                    <div className="flex flex-col space-y-10">
                        {/* {courses.map(({ node }) => (
                            <PostFlat {...node.course.frontmatter} slug={node.name} key={node.id} />
                        ))} */}
                    </div>
                    {/* <Pagination
                        numPages={pageContext.numPages}
                        currentPage={pageContext.currentPage}
                        pathPrefix="/courses"
                        indexPagePathPerfix="/"
                    /> */}
                </div>
            </div>
        </WithSideBar>
    );
};
export default SearchPage;
