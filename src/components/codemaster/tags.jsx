import React from 'react';
import { Link } from 'gatsby';

const Tags = function ({ children, routePath }) {
	return (
		<Link
			to={`/tags/${routePath}`}
			className="py-1 px-2 lg:px-0 bg-emerald-500 lg:bg-transparent text-white rounded ml-2 lg:ml-0 mt-2 inline-block capitalize shadow-md lg:shadow-none truncate group"
		>
			<span
				className="
				w-2
				h-2
				hidden
				lg:inline-block
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
