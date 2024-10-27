import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/contact', label: t('nav.contact') },
    { path: '/blog', label: t('nav.blog') }
  ];

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-white font-medium'
                    : 'text-gray-300 hover:text-white'
                } transition-colors`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              to="/admin"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              {t('nav.admin')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}