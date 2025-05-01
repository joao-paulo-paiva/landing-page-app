import React from 'react';

function ContactModal({ closeModal }) {
  return (
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
  );
}

export default ContactModal;