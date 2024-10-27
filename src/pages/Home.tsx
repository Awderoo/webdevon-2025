import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90" />
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t('home.title')}
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          {t('home.subtitle')}
        </p>
        <div className="mt-10">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 transition-colors">
            {t('home.cta')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}