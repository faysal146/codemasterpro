import React from 'react';

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    RedditShareButton,
    RedditIcon,
    PinterestShareButton,
    PinterestIcon
} from 'react-share';

const ShareButtons = ({ title, url, twitterHandle, tags }) => (
    <div className="flex items-center">
        <FacebookShareButton url={url}>
            <FacebookIcon size={28} round />
        </FacebookShareButton>

        <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
            <TwitterIcon size={28} round />
        </TwitterShareButton>

        <PinterestShareButton url={url}>
            <PinterestIcon size={28} round />
        </PinterestShareButton>

        <RedditShareButton url={url} title={title}>
            <RedditIcon size={28} round />
        </RedditShareButton>

        <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon size={28} round />
        </WhatsappShareButton>
    </div>
);
export default ShareButtons;
