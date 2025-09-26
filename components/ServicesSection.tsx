import React from 'react';
import { ChatbotIcon } from './icons/ChatbotIcon';
import { AnalysisIcon } from './icons/AnalysisIcon';
import { AutomationIcon } from './icons/AutomationIcon';

const servicesData = [
  {
    icon: <ChatbotIcon className="h-12 w-12" />,
    title: 'Chatbots com IA Generativa',
    description: 'Crie conversas fluidas e naturais que resolvem problemas complexos e encantam seus clientes, 24/7.',
    image: '/log.png',
  },
  {
    icon: <AnalysisIcon className="h-12 w-12" />,
    title: 'Análise de Sentimento',
    description: 'Entenda a voz do seu cliente em tempo real. Monitore feedbacks, identifique tendências e melhore a satisfação.',
    image: '/logom.jpeg',
  },
  {
    icon: <AutomationIcon className="h-12 w-12" />,
    title: 'Automação de Processos (RPA)',
    description: 'Libere sua equipe de tarefas repetitivas. Automatize workflows e aumente a eficiência operacional com nossa IA.',
    image: '/build.png',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nossas Soluções</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta para transformar a experiência do seu cliente e otimizar seus processos de negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;