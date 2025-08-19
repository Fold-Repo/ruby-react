'use client';

import React, { useEffect, useState } from 'react';
import { FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaPinterest } from 'react-icons/fa6';

type PostShareBarProps = {
  tags?: string[];
  shareData?: {
    title: string;
    text: string;
  };
};

const PostShareBar: React.FC<PostShareBarProps> = ({ tags = [], shareData }) => {

  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareData?.title || 'Check out this blog!',
          text: shareData?.text || 'This blog post is amazing — take a look!',
          url: currentUrl,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Share not supported on this browser');
    }
  };

  return (
    <div className="flex items-center justify-between gap-5 flex-wrap border border-gray-300 dark:border-gray-600 rounded-xl p-4">

      {/* Tags */}
      <div className="flex items-center gap-3 flex-wrap">
        <h2 className="font-medium text-sm text-gray-800 dark:text-gray-200">Popular Tag:</h2>
        <div className="flex items-center gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-md text-xs font-semibold border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-3 flex-wrap">
        <h2 className="font-medium text-sm text-gray-800 dark:text-gray-200">Share post:</h2>
        <div className="flex items-center gap-2 text-lg text-gray-800 dark:text-gray-200">

          <FaFacebook className="cursor-pointer hover:text-primary" onClick={handleShare} />
          <FaXTwitter className="cursor-pointer hover:text-primary" onClick={handleShare} />
          <FaInstagram className="cursor-pointer hover:text-primary" onClick={handleShare} />
          <FaLinkedin className="cursor-pointer hover:text-primary" onClick={handleShare} />
          <FaPinterest className="cursor-pointer hover:text-primary" onClick={handleShare} />

        </div>
      </div>

    </div>
  );
};

export default PostShareBar;
