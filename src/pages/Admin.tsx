import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import BlogEditor from '../components/BlogEditor';
import { useBlogStore } from '../store/blogStore';

export default function Admin() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedPage, setSelectedPage] = useState('home');
  const [showBlogEditor, setShowBlogEditor] = useState(false);
  const [pageContent, setPageContent] = useState('');

  const posts = useBlogStore((state) => 
    state.posts.filter(post => post.language === selectedLanguage)
  );
  const deletePost = useBlogStore((state) => state.deletePost);

  const pages = ['home', 'about', 'services', 'contact', 'blog'];

  useEffect(() => {
    const content = i18n.getResourceBundle(selectedLanguage, 'translation')[selectedPage];
    setPageContent(JSON.stringify(content, null, 2));
  }, [selectedLanguage, selectedPage, i18n]);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPageContent(e.target.value);
  };

  const handleSaveContent = () => {
    try {
      const parsedContent = JSON.parse(pageContent);
      // Here you would typically update your i18n resources
      console.log('Saving content:', parsedContent);
    } catch (error) {
      console.error('Invalid JSON format');
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Content Management</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="en">English</option>
                <option value="sv">Svenska</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Page
              </label>
              <select
                value={selectedPage}
                onChange={(e) => setSelectedPage(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {pages.map((page) => (
                  <option key={page} value={page}>
                    {t(`nav.${page}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Content Editor
              </label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows={10}
                value={pageContent}
                onChange={handleContentChange}
              />
            </div>

            <button 
              onClick={handleSaveContent}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Blog Posts</h2>
          <button
            onClick={() => setShowBlogEditor(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Post
          </button>
        </div>

        {showBlogEditor ? (
          <BlogEditor
            selectedLanguage={selectedLanguage}
            onClose={() => setShowBlogEditor(false)}
          />
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <h3 className="font-medium">{post.title}</h3>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-blue-600">
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="p-2 text-gray-600 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}