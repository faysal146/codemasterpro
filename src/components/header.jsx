import React from 'react';
import { Link } from 'gatsby';
import Logo from 'components/codemaster/logo';

export default () => (
    <header className="py-5 px-4 text-emerald-400">
        <div className="container flex justify-between mx-auto">
            <Link to="/" aria-label="Back to homepage">
                <Logo />
            </Link>
            <div className="items-center flex space-x-4">
                {/* TODO: Add Social Link here */}
                <a className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-7 -2 24 24"
                        width="24"
                        fill="currentColor"
                    >
                        <path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z" />
                    </svg>
                </a>
                <a className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-2 -2 24 24"
                        width="24"
                        fill="currentColor"
                    >
                        <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z" />
                        <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z" />
                        <circle cx="15.156" cy="4.858" r="1.237" />
                    </svg>
                </a>
                <a className="">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-2 -4 24 24"
                        width="24"
                        fill="currentColor"
                    >
                        <path d="M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03c0 1.403.724 2.64 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z" />
                    </svg>
                </a>
            </div>
        </div>
    </header>
);
