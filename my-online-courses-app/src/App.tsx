import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Instructors from './components/Instructors';
import Benefits from './components/Benefits';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer'
import WhatsAppCallToAction from './components/WhatsAppCallToAction';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Courses />
      <Benefits />
      <Instructors />
      <Testimonials />
      <SignupForm />
      <WhatsAppCallToAction />
      <Footer />
    </div>
  );
};

export default App;
