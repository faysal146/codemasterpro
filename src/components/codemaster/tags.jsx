import React from 'react';
import { Link } from 'gatsby';

const Tags = function ({ children, routePath }) {
	return (
		<Link
			to={`/tags/${routePath}`}
			className="py-1 px-2 bg-green-500 text-white rounded ml-2 mt-2 inline-block capitalize shadow-md"
		>
			<span
				className="
				w-2
				h-2
				hidden
				md:inline-block
				rounded-full
				bg-green-500
				mr-2
				group-hover:opacity-100
				opacity-0
				transition
				duration-200
				ease-in-out
			"
			/>
			<span>{children}</span>
		</Link>
	);
};

export default Tags;
