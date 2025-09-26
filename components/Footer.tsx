import React from 'react';

const Footer: React.FC = () => {
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

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <a href="#home" onClick={handleNavClick} className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <img src="/log.png" alt="CambaTech Logo" className="h-10 w-auto rounded-lg" />
              <span className="text-2xl font-bold">CambaTech</span>
            </a>
            <p className="text-blue-200">Automação Inteligente, Atendimento Excepcional.</p>
          </div>
          <div className="text-blue-200">
            <p>&copy; {new Date().getFullYear()} CambaTech. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;