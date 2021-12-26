/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import { Link } from 'gatsby';
import Layout from 'layouts/layout';
// eslint-disable-next-line import/no-unresolved
import PageNotFoundImage from 'assets/not-found.svg';

const NotFoundPage = function () {
    return (
        <Layout>
            <section className="px-4 py-24 mx-auto max-w-7xl my-10">
                <div
                    className="
				grid
				items-center
				w-full
				grid-cols-1
				gap-10
				mx-auto
				md:w-4/5
				lg:grid-cols-2
				xl:gap-32
			"
                >
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-400 uppercase">
                            Error
                            {/* {{ error.statusCode }} */}
                        </p>
                        <h1
                            className="
						mb-4
						text-2xl
						font-extrabold
						leading-tight
						tracking-tight
						text-left text-gray-200
						md:text-4xl
					"
                        >
                            {/* {{ error.message }} */}
                            Page Not Found
                        </h1>
                        <p className="mb-5 text-base text-left text-gray-400 md:text-xl">
                            You might have the wrong address, or the page may have moved.
                        </p>
                        <Link
                            to="/"
                            className="w-full mb-2 sm:w-auto sm:mb-0 bg-emerald-500 text-white py-2 px-4 rounded"
                        >
                            Back to homepage
                        </Link>
                        <Link
                            to="/contact"
                            className="
						w-full
						mb-2
						sm:w-auto sm:mb-0
						bg-emerald-500
						text-white
						py-2
						px-4
						rounded
						md:ml-2
					"
                        >
                            Contact us
                        </Link>
                    </div>
                    <div>
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                            <PageNotFoundImage className="mx-auto w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default NotFoundPage;
