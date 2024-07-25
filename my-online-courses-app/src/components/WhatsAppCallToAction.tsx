import React from 'react';

const WhatsAppCallToAction: React.FC = () => {
  return (
    <section className="bg-gray-300 py-8 md:py-12 text-black text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Fale Conosco pelo WhatsApp!</h2>
        <p className="text-base md:text-lg mb-6 md:mb-8">
          Tem alguma dúvida ou precisa de ajuda? Estamos aqui para ajudar você. Clique no botão abaixo para conversar com nossa equipe diretamente pelo WhatsApp.
        </p>
        <a 
          href="https://wa.me/5511999999999" // Substitua pelo seu número de WhatsApp
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white text-green-600 py-3 px-6 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-100 transition duration-300"
        >
          Converse Conosco
        </a>
      </div>
    </section>
  );
};

export default WhatsAppCallToAction;
