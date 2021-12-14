/* eslint-disable react/function-component-definition */
import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import truncate from 'lodash/truncate';


export default function ({ image, title, description, slug, createdAt /* updatedAt */ }) {
    const thumbImage = getImage(image);
    return (
        // TODO: Make it responsive for desktop ass well
        <div className="bg-gray-800 shadow-lg rounded p-4">
            <figure className="w-full h-48 rounded overflow-hidden bg-center">
                <GatsbyImage className="h-full" image={thumbImage} alt={title} />
            </figure>
            <div className="flex flex-col mt-4" style={{ height: '180px' }}>
                <p className="-mt-1 text-sm font-normal text-gray-400">{createdAt}</p>
                <h2 className="text-lg font-extrabold leading-snug text-gray-800 mb-3">
                    <Link className="text-green-400" to={`/${slug}`}>
                        {truncate(title, { length: 40 })}
                    </Link>
                </h2>
                <p className="text-sm font-normal text-gray-300 flex-grow">
                    {truncate(description, { length: 140 })}
                </p>
                <Link to={`/${slug}`} className="flex group">
                    <span className="relative text-green-300">
                        <span
                            className="
							group-hover:w-full
							absolute
							-bottom-2
							h-1
							w-0
							inline-block
							bg-green-400
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

    // : (
    //     <div className="grid grid-cols-5 gap-6 bg-gray-800 shadow-xl rounded p-4">
    //         <figure className="w-full col-span-2 max-h-64 rounded overflow-hidden bg-center">
    //             <GatsbyImage className="h-full" image={thumbImage} alt={title} />
    //         </figure>
    //         <div className="col-span-3 flex flex-col" style={{ height: '260px' }}>
    //             <p className="-mt-1 text-sm font-normal text-gray-400">{createdAt}</p>
    //             <h2 className="text-xl font-extrabold leading-snug text-gray-800 mb-3">
    //                 <Link className="text-green-400" to={`/${slug}`}>
    //                     {truncate(title, { length: 80 })}
    //                 </Link>
    //             </h2>
    //             <p className="text-sm font-normal text-gray-300 flex-grow">
    //                 {truncate(description, { length: 240 })}
    //             </p>
    //             <Link to={`/${slug}`} className="flex group">
    //                 <span className="relative text-green-300">
    //                     <span className="group-hover:w-full absolute -bottom-2 h-1 inline-block bg-green-400 site-fade" />
    //                     Read More
    //                 </span>
    //                 <svg
    //                     className="inline-block ml-1 group-hover:ml-2 site-fade"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     viewBox="-5 -5 24 24"
    //                     width="20"
    //                     fill="currentColor"
    //                 >
    //                     <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z" />
    //                 </svg>
    //             </Link>
    //         </div>
    //     </div>
    // );
}
