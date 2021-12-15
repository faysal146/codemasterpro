/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export default function ({ image, title, slug, createdAt, excerpt /* updatedAt, description */ }) {
    const thumbImage = getImage(image);
    return (
        <div className="bg-gray-800 shadow-lg rounded p-4 sm:flex">
            <figure className="rounded overflow-hidden bg-center text-center shrink-0 w-full sm:w-[200px] lg:w-[250px] h-48 lg:h-64 sm:self-center">
                <GatsbyImage className="h-full" image={thumbImage} alt={title} />
            </figure>
            {/* sm:h-[200px] lg:h-[250px] */}
            <div className="flex flex-col mt-4 sm:mt-0 sm:ml-3 w-full">
                <p className="-mt-1 text-sm font-normal text-gray-400">{createdAt}</p>
                <h2 className="text-lg lg:text-xl xl:text-2xl font-extrabold leading-snug text-gray-800 mb-3">
                    <Link className="text-emerald-400" to={`/${slug}`}>
                        {title}
                    </Link>
                </h2>
                <p className="text-sm lg:text-base font-normal text-gray-300 flex-grow">
                    {/* {isLargeExtraScreen ? excerpt : `${excerpt.substr(0, 300)}...`} */}
                    {excerpt}
                </p>
                <Link to={`/${slug}`} className="flex group mt-2 sm:mt-0">
                    <span className="relative text-emerald-300">
                        <span
                            className="
							group-hover:w-full
							absolute
							-bottom-2
							h-1
							w-0
							inline-block
							bg-emerald-400
							site-fade
						"
                        />
                        Read More
                    </span>
                    <svg
                        className="inline-block ml-1 group-hover:ml-2 site-fade"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-5 -5 24 24"
                        width="20"
                        fill="currentColor"
                    >
                        <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}
