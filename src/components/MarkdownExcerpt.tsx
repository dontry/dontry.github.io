import React from 'react';
import { SmallTag } from './Tag';

interface Post {
  frontmatter: {
    title: string;
    tags?: string[];
    excerpt?: string;
  };
  fields: {
    path: string;
    date: string;
  };
  excerpt?: string;
}

interface MarkdownExcerptProps {
  post: Post;
}

const MarkdownExcerpt: React.FC<MarkdownExcerptProps> = ({ post }) => {
  const { frontmatter, fields } = post;
  const title = frontmatter.title || 'Untitled Post';

  return (
    <article className="pb-12">
      <h2 className="mb-1 text-lg font-medium">
        <a 
          href={fields.path} 
          className="text-[#3a3a3a] hover:underline"
          aria-label={`Read ${title}`}
        >
          {title}
        </a>
      </h2>
      <div className="mb-1 text-sm">
        {!!fields.date  && (
          <time className="font-light text-gray-600 inline-block mr-5 mb-2" dateTime={new Date(fields.date).toLocaleDateString()}>
            {fields.date}
          </time>
        )}
        <div className="inline-flex">
          {frontmatter.tags?.map(tag => (
            <SmallTag key={tag} tag={tag} />
          ))}
        </div>
      </div>
      <p className="overflow-hidden line-clamp-3 p-0 font-light leading-tight">
        {frontmatter.excerpt || post.excerpt}
      </p>
    </article>
  );
};

export default MarkdownExcerpt; 