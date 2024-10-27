import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function ServiceDetail() {
  const { t } = useTranslation();
  const { id } = useParams();

  const getServiceTranslation = (serviceId: string) => {
    const serviceMap: Record<string, string> = {
      'web-development': 'webDev',
      'ui-ux-design': 'uiDesign',
      'digital-marketing': 'marketing',
      'consulting': 'consulting'
    };
    return serviceMap[serviceId || ''] || '';
  };

  const serviceKey = getServiceTranslation(id || '');
  
  if (!serviceKey) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">{t('services.serviceNotFound')}</h1>
        <Link to="/services" className="text-blue-600 hover:text-blue-800">
          {t('services.backToServices')}
        </Link>
      </div>
    );
  }

  const features = t('services.features.list', { returnObjects: true }) as string[];

  return (
    <div className="space-y-8">
      <Link
        to="/services"
        className="inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        {t('services.backToServices')}
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
          <h1 className="text-3xl font-bold">{t(`services.${serviceKey}.title`)}</h1>
          <p className="mt-4 text-lg text-blue-100">
            {t(`services.${serviceKey}.description`)}
          </p>
        </div>

        <div className="p-8">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-700">
              {t(`services.${serviceKey}.fullDescription`)}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">{t('services.features.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('services.cta')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}