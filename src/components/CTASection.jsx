import React from 'react';

function CTASection({ openModal }) {
  return (
    <section id="cta" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>🚀 Precisa de Assistência Técnica Especializada?</h2>
          <p>
            Conte com a <strong>ColdTech</strong> para instalação, manutenção e projetos de climatização. Nossa equipe está pronta para oferecer soluções rápidas e eficientes para você ou sua empresa.
          </p>
          <button className="cta-button principal large" onClick={openModal}>
            Solicitar Atendimento
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;