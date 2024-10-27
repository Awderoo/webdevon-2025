import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBlogStore } from '../store/blogStore';

interface BlogEditorProps {
  selectedLanguage: string;
  onClose: () => void;
}

export default function BlogEditor({ selectedLanguage, onClose }: BlogEditorProps) {
  const { t } = useTranslation();
  const addPost = useBlogStore((state) => state.addPost);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    image: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addPost({
      ...formData,
      language: selectedLanguage,
    });
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('blog.editor.title')}
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('blog.editor.excerpt')}
        </label>
        <input
          type="text"
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('blog.editor.content')}
        </label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('blog.editor.author')}
        </label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          {t('blog.editor.imageUrl')}
        </label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          {t('blog.editor.cancel')}
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {t('blog.editor.publish')}
        </button>
      </div>
    </form>
  );
}