import React from 'react';

const DownloadBTN = ({ link }) => (
    <a
        href={link}
        className="inline-block py-2 px-24 lg:px-28 bg-red-500 rounded text-white shadow-xl"
        target="_blank"
        rel="noreferrer"
    >
        Download
    </a>
);

export default DownloadBTN;
