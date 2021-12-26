import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function (props) {
    const { image, title, excerpt, slug, createdAt /* updatedAt, description */ } = props;
    const thumbImage = getImage(image);
    return (
        <div className="p-2">
            <div className="overflow-hidden rounded shadow-xl bg-gray-700">
                <figure className="object-cover w-full h-40 md:h-48 rounded">
                    <GatsbyImage className="h-full" image={thumbImage} alt={title} />
                </figure>
                <div className="py-3 px-2">
                    <p className="mb-2 text-xs font-semibold text-gray-400 uppercase">
                        {createdAt}
                    </p>
                    <Link
                        to={`/${slug}`}
                        aria-label="Article"
                        className="
							inline-block
							mb-2
							text-emerald-400
							transition-colors
							duration-200
							hover:text-deep-purple-accent-700
						"
                    >
                        <h2 className="text-lg xl:text-xl font-bold break-words">
                            {`${title.substr(0, 30)}...`}
                        </h2>
                    </Link>
                    <p className="mb-4 text-gray-300 text-sm lg:text-base break-words">{excerpt}</p>
                    <Link
                        to={`/${slug}`}
                        aria-label="Likes"
                        className="bg-emerald-400 rounded text-center py-1 text-sm xl:text-base text-gray-900 flex justify-center items-center"
                    >
                        <span className="inline-block font-bold">Read Now</span>
                        <span className="inline-block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-5 -5 24 24"
                                width="18"
                                fill="currentColor"
                            >
                                <path d="M10.586 5.657l-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z" />
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
