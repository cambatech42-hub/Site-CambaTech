import React from 'react';

const Header: React.FC = () => {

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

  const navLinks = [
    { href: '#services', label: 'Soluções' },
    { href: '#about', label: 'Sobre Nós' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" onClick={handleNavClick} className="flex items-center gap-2">
            <img src="/log.png" alt="CambaTech Logo" className="h-10 w-auto rounded-lg" />
            <span className="text-2xl font-bold text-blue-900">CambaTech</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleNavClick} className="text-gray-600 hover:text-blue-900 font-medium transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={handleNavClick} className="hidden md:inline-block bg-blue-900 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-800 transition-all duration-300 transform hover:scale-105">
            Comece Agora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;