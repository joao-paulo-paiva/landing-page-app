import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CTASection from './components/CTASection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

function App() {
  // Estado para controlar a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funções para abrir e fechar o modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Seção Hero */}
      <HeroSection />

      <main id="main-content">
        {/* Seção de Serviços */}
        <ServicesSection />

        {/* Seção CTA */}
        <CTASection openModal={openModal} />
      </main>

      {/* Modal de Contato */}
      {isModalOpen && <ContactModal closeModal={closeModal} />}

      {/* Rodapé */}
      <Footer />
    </>
  );
}

export default App;