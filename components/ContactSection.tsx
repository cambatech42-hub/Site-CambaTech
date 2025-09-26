import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');
    // Mock form submission
    setTimeout(() => {
      setStatus('Mensagem enviada com sucesso!');
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Vamos Conversar</h2>
            <p className="text-lg text-gray-600 mt-2">Tem um projeto em mente? Adoraríamos ouvir sobre ele.</p>
          </div>
          <div className="bg-white p-8 sm:p-12 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nome</label>
                  <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" required />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Mensagem</label>
                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={5} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-blue-900 text-white font-bold py-3 px-12 rounded-full text-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Enviar Mensagem
                </button>
              </div>
              {status && <p className="text-center mt-4 text-gray-600">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;