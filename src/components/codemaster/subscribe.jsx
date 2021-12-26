import React from 'react';

export default () => (
    <div className="container mx-auto py-8 bg-gray-800 rounded px-6">
        <p className="mb-3 text-gray-400 capitalize lg:text-center">
            Subscribe now to notify when we add new course
        </p>
        <div className="sm:flex-row flex-col flex justify-center">
            <input
                type="text"
                className="py-4 px-3 block rounded bg-gray-700 shadow-md border border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none w-full md:max-w-[500px]"
                placeholder="Enter Your Email..."
            />
            <button
                type="button"
                className="sm:ml-2 mt-3 sm:mt-0 py-4 px-14 bg-emerald-500 rounded shadow-md"
            >
                Subscribe
            </button>
        </div>
    </div>
);
