import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, User } from 'lucide-react';
import { useBlogStore } from '../store/blogStore';

export default function Blog() {
  const { t, i18n } = useTranslation();
  const posts = useBlogStore((state) => 
    state.posts.filter(post => post.language === i18n.language)
  );

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="mt-4 text-xl text-gray-600">Latest insights and updates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
              <p className="mt-2 text-gray-600">{post.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <User size={16} className="mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {post.date}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}