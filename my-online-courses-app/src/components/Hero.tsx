import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Aprenda a qualquer hora, em qualquer lugar</h2>
        <p className="text-lg mb-8">Cursos online de alta qualidade, acessíveis de qualquer dispositivo.</p>
        <a href="#courses" className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-primary">Ver Cursos</a>
      </div>
    </section>
  );
};

export default Hero;
