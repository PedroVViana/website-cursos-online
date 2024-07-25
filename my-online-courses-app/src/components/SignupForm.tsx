import React, { useState } from 'react';

const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione a lógica para enviar os dados do formulário aqui
    console.log('Formulário enviado', { name, email, phone });
  };

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Inscreva-se Agora</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-200 p-6 md:p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Telefone</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-primary w-full"
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
