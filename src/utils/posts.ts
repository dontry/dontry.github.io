import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { sortPosts } from './sort';

interface PostOptions {
  filter?: 'all' | 'active' | 'archived';
  limit?: number;
  sort?: 'asc' | 'desc';
  tag?: string;
}

export async function getPosts(options: PostOptions = {}): Promise<CollectionEntry<'blog'>[]> {
  const { 
    filter = 'all',
    limit,
    sort = 'desc',
    tag 
  } = options;

  let posts = await getCollection('blog', ({ data }) => {
    const passesFilter = filter === 'all' ? true : 
      filter === 'active' ? !data.archived :
      data.archived;
    
    const passesTag = !tag || (data.tags?.includes(tag));
    
    return passesFilter && passesTag;
  });

  posts = sortPosts(posts);
  if (sort === 'asc') posts = posts.reverse();
  if (limit) posts = posts.slice(0, limit);
  
  return posts;
} 