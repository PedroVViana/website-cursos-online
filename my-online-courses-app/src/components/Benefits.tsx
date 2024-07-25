import React from 'react';

const benefits = [
  {
    title: 'Flexibilidade',
    description: 'Aprenda no seu próprio ritmo, a qualquer hora e em qualquer lugar.',
    icon: '📅',
  },
  {
    title: 'Certificação',
    description: 'Receba certificados reconhecidos pelo mercado.',
    icon: '🎓',
  },
  {
    title: 'Apoio ao Aluno',
    description: 'Suporte contínuo de nossos professores e tutores.',
    icon: '📞',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="bg-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Benefícios de Fazer Nossos Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
