import { create } from 'zustand';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  language: string;
}

interface BlogStore {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, 'id' | 'date'>) => void;
  editPost: (post: BlogPost) => void;
  deletePost: (id: string) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  addPost: (post) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          ...post,
          id: crypto.randomUUID(),
          date: new Date().toISOString().split('T')[0],
        },
      ],
    })),
  editPost: (updatedPost) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      ),
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
}));