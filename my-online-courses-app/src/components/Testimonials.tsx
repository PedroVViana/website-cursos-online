import React from 'react';

const testimonials = [
  {
    name: 'João Silva',
    text: 'Este curso mudou minha vida! Aprendi muito e agora estou aplicando no meu trabalho.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Maria Oliveira',
    text: 'Os instrutores são excelentes e o conteúdo é muito bem organizado.',
    image: 'https://via.placeholder.com/100',
  },
  {
    name: 'Pedro Santos',
    text: 'Recomendo para todos que querem melhorar suas habilidades.',
    image: 'https://via.placeholder.com/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">O que nossos alunos dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
