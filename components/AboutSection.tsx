import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Sobre a Cambatech</h2>
            <p className="text-lg text-gray-700 font-medium mb-4 leading-relaxed">
              Inovação e tecnologia acessível para seu negócio.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Nossa missão é desmistificar a Inteligência Artificial, oferecendo soluções de automação poderosas e fáceis de usar. Acreditamos que empresas de todos os tamanhos podem se beneficiar da tecnologia para otimizar processos, reduzir custos e, o mais importante, encantar seus clientes.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Na Cambatech, combinamos expertise técnica com uma abordagem focada no seu sucesso, garantindo um impacto real e mensurável para o seu negócio.
            </p>
          </div>
          
          <div className="relative h-96 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden shadow-inner">
            <img 
              src="/1.png" 
              alt="Construção e desenvolvimento de soluções tecnológicas" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;