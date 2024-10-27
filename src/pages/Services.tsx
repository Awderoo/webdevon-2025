import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Code, Palette, LineChart, MessageSquare } from 'lucide-react';

export const services = [
  {
    id: 'web-development',
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: "Web Development",
    description: "Custom websites and web applications",
    fullDescription: "We create modern, responsive websites and web applications tailored to your specific needs. Our development team uses cutting-edge technologies to deliver fast, secure, and scalable solutions."
  },
  {
    id: 'ui-ux-design',
    icon: <Palette className="h-8 w-8 text-blue-600" />,
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces",
    fullDescription: "Our design team creates user-centered interfaces that not only look beautiful but also provide an exceptional user experience. We focus on intuitive navigation, accessibility, and visual appeal."
  },
  {
    id: 'digital-marketing',
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    title: "Digital Marketing",
    description: "Growth strategies that deliver results",
    fullDescription: "Drive your business growth with our comprehensive digital marketing services. From SEO and content marketing to social media management and PPC campaigns, we help you reach and engage your target audience."
  },
  {
    id: 'consulting',
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    title: "Consulting",
    description: "Expert advice and guidance",
    fullDescription: "Get strategic guidance from our experienced consultants. We help you navigate technical challenges, optimize processes, and make informed decisions about your digital presence."
  }
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">{t('services.title')}</h1>
        <p className="mt-4 text-xl text-gray-600">{t('services.description')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.id}`}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-4">
              {service.icon}
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}