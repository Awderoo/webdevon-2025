import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Award, Target } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Team",
      description: "Our dedicated professionals bring years of experience"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Quality First",
      description: "We maintain the highest standards in everything we do"
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Goal Oriented",
      description: "Focused on achieving measurable results for our clients"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">{t('about.title')}</h1>
        <p className="mt-4 text-xl text-gray-600">{t('about.description')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="mt-4 text-lg font-semibold text-center">{feature.title}</h3>
            <p className="mt-2 text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}