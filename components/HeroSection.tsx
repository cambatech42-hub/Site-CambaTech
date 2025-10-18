import React from 'react';

const HeroSection: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const phoneNumber = '5554981144125';
    const message = 'Olá! Gostaria de saber mais sobre os serviços da CambaTech.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="relative pt-12 pb-24 lg:pb-32 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <img src="/build.png" alt="CambaTech Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-teal-100 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-orange-100 rounded-full opacity-20 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transforme seu Negócio com
            <span className="block text-white">
              Automação Inteligente
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Chatbots personalizados, automação de processos e soluções de IA que realmente funcionam para sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#whatsapp" 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-8 rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Fale Conosco
            </a>
            <a 
              href="#services" 
              onClick={handleNavClick}
              className="bg-white/10 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Conheça Nossas Soluções
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" onClick={handleNavClick} className="text-white/70 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
       <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;