import React from 'react';

const courses = [
  {
    title: 'Curso de React',
    description: 'Aprenda a criar aplicações web modernas com React.',
    image: 'https://via.placeholder.com/150',
    buttonText: 'Saiba Mais sobre React',
  },
  {
    title: 'Curso de TypeScript',
    description: 'Melhore seu código JavaScript com TypeScript.',
    image: 'https://via.placeholder.com/150',
    buttonText: 'Saiba Mais sobre TypeScript',
  },
  {
    title: 'Curso de Tailwind CSS',
    description: 'Estilize suas aplicações com Tailwind CSS.',
    image: 'https://via.placeholder.com/150',
    buttonText: 'Saiba Mais sobre Tailwind CSS',
  },
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg text-center">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">{course.title}</h3>
              <p className="text-white font-bold mb-4">{course.description}</p>
              <a href="#" className="bg-white text-black py-2 px-4 font-bold rounded hover:bg-gray-100 transition">
                {course.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
