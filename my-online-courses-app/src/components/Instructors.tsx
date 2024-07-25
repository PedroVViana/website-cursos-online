import React from 'react';

const instructors = [
  {
    name: 'Prof. Ana Souza',
    bio: 'Especialista em desenvolvimento web com mais de 10 anos de experiência.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Prof. Carlos Pereira',
    bio: 'Engenheiro de software e instrutor certificado em TypeScript.',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Prof. Beatriz Oliveira',
    bio: 'Designer e desenvolvedora front-end com paixão por Tailwind CSS.',
    image: 'https://via.placeholder.com/150',
  },
];

const Instructors: React.FC = () => {
  return (
    <section id="instructors" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Instrutores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg text-center">
              <img src={instructor.image} alt={instructor.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">{instructor.name}</h3>
              <p className="text-white">{instructor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
