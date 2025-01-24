import React from 'react';

interface TagProps {
  tag: string;
  to?: string;
  size?: 'small' | 'normal';
}

const baseClasses = `
  relative inline-block bg-light py-1 px-4 rounded-r-sm
  font-sans min-w-[50px] text-right mx-2.5 mb-2.5 whitespace-nowrap
  before:content-[''] before:absolute before:w-0 before:bg-inherit
  before:border-[12px] before:border-white before:dark:border-gray-900 before:border-r-transparent before:dark:border-r-transparent
  before:rounded-l-full before:-left-5 before:top-0 before:bottom-0
  after:content-[''] after:absolute after:w-1.5 after:h-1.5 
  after:left-0 after:top-[9px] after:rounded-full after:bg-white
`;

const linkClasses = `
  font-medium text-dark-grey/80 transition-colors duration-200
  hover:text-dark-grey/90
`;

const smallClasses = `
  text-xs before:border-[10px] after:top-[7px] mb-0
`;

const Tag: React.FC<TagProps> = ({ tag, to, size = 'normal' }) => (
  <span className={`${baseClasses} ${size === 'small' ? smallClasses : ''}`}>
    <a href={to || `/tags/${tag}`} className={linkClasses}>
      {tag}
    </a>
  </span>
);

export const SmallTag: React.FC<TagProps> = (props) => (
  <Tag {...props} size="small" />
);

export default Tag; 