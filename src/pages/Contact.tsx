import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      detail: "contact@company.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      detail: "+1 (555) 123-4567"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Address",
      detail: "123 Business Street, City, Country"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-900">{t('contact.title')}</h1>

      <div className="mt-12 grid grid-cols-1 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('contact.form.message')}
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              {t('contact.form.send')}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="p-3 bg-blue-50 rounded-full">{info.icon}</div>
                <h3 className="mt-4 font-medium text-gray-900">{info.title}</h3>
                <p className="mt-2 text-gray-600">{info.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}