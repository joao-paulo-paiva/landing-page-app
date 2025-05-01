import React, { useState } from 'react';
import './App.css';

function App() {
  // Estado para controlar a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  const openModal = () => setIsModalOpen(true);

  // Função para fechar o modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-content">
          <a href="#main-content" className="logo">
            <img src="../src/assets/logo.svg" alt="ColdTech Logo" />
            <span className="logo-text">ColdTech</span>
          </a>
          <ul className="navbar-links">
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#cta">Contato</a></li>
          </ul>
        </div>
      </nav>


      {/* Seção Hero */}
      <header className="hero-section">
        <div className="container hero-content">
          <h1>ColdTech</h1>
          <p className="subheadline">
            Especialistas em assistência técnica de ar-condicionado: Instalação, Manutenção e Projetos.
          </p>
          <a href="#servicos" className="cta-button principal">Conheça Nossos Serviços</a>
        </div>
      </header>

      <main id="main-content">
        {/* Seção de Serviços */}
        <section id="servicos" className="servicos-section">
          <div className="container">
            <h2>Nossos Serviços</h2>
            <div className="servicos-grid">
              <div className="servico-item">
                <span className="icon">📦</span>
                <h3>Instalação de Ar Condicionado</h3>
                <p>Realizamos a instalação de equipamentos com segurança e eficiência.</p>
              </div>
              <div className="servico-item">
                <span className="icon">🔧</span>
                <h3>Manutenção Preventiva</h3>
                <p>Evite problemas futuros com manutenções regulares e programadas.</p>
              </div>
              <div className="servico-item">
                <span className="icon">⚙️</span>
                <h3>Manutenção Corretiva</h3>
                <p>Reparos rápidos e eficazes para garantir o funcionamento do seu equipamento.</p>
              </div>
              <div className="servico-item">
                <span className="icon">📋</span>
                <h3>Visitas Técnicas</h3>
                <p>Diagnóstico detalhado e soluções personalizadas para cada cliente.</p>
              </div>
              <div className="servico-item">
                <span className="icon">❄️</span>
                <h3>Câmara Frigorífica</h3>
                <p>Projetos e manutenção de câmaras frigoríficas para diversas aplicações.</p>
              </div>
              <div className="servico-item">
                <span className="icon">📐</span>
                <h3>Projetos</h3>
                <p>Desenvolvemos projetos personalizados para climatização de ambientes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção CTA */}
        <section id="cta" className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Precisa de Assistência Técnica Especializada?</h2>
              <p>
                Conte com a <strong>ColdTech</strong> para instalação, manutenção e projetos de climatização. Nossa equipe está pronta para oferecer soluções rápidas e eficientes para você ou sua empresa.
              </p>
              <button className="cta-button principal large" onClick={openModal}>
                Solicitar Atendimento
              </button>
            </div>
            <div className="cta-image">
              <img src="assets/assistencia-tecnica.svg" alt="Assistência Técnica" />
            </div>
          </div>
        </section>
      </main>

      {/* Modal de Contato */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeModal} aria-label="Fechar Modal">
              &times;
            </button>
            <h2>Entre em Contato</h2>
            <p>
              Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
            </p>
            <form id="contato-form" autoComplete="off" aria-label="Formulário de Contato">
              <label htmlFor="nome_contato" className="sr-only">Seu Nome</label>
              <input type="text" id="nome_contato" name="nome_contato" placeholder="Seu Nome" required />

              <label htmlFor="email" className="sr-only">Seu E-mail</label>
              <input type="email" id="email" name="email" placeholder="Seu E-mail" required />

              <label htmlFor="telefone" className="sr-only">Seu Telefone/WhatsApp</label>
              <input type="tel" id="telefone" name="telefone" placeholder="Seu Telefone/WhatsApp" required />

              <label htmlFor="mensagem" className="sr-only">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Como podemos ajudar você? (Ex.: Instalação, Manutenção, Projetos)"
                rows="3"
              ></textarea>

              <button type="submit" className="cta-button principal large">Solicitar Contato</button>
            </form>
            <button className="modal-exit-button" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      )}

      <footer>
        <div className="container">
          <p>
            © <span id="current-year"></span> ColdTech - Todos os direitos reservados.
          </p>
          <p>
            <a href="/termos">Termos de Uso</a> | <a href="/privacidade">Política de Privacidade</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;