import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<'blog'>;
export const sortPosts = (posts: Post[]) => {
  return posts.sort((a, b) => {
    if (a.data.date && b.data.date) {
      return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
    } else if (!a.data.date && !b.data.date) {
      return a.data.title.localeCompare(b.data.title);
    } else {
      return a.data.date ? -1 : 1;
    }
  });
};
