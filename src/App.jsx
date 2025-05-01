import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Atualizar ano no rodapé
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth Scroll para links internos (âncoras)
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            targetElement.setAttribute('tabindex', '-1');
            targetElement.focus();
          }
        }
      });
    });

    // Simulação de envio de formulário Business
    const businessForm = document.getElementById('business-form');
    const businessFormStatus = document.getElementById('business-form-status');
    if (businessForm && businessFormStatus) {
      businessForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Validação Simples
        const nome = businessForm.querySelector('input[name="nome_contato"]').value.trim();
        const email = businessForm.querySelector('input[name="email"]').value.trim();
        const telefone = businessForm.querySelector('input[name="telefone"]').value.trim();
        let valid = true;
        if (!nome || !email || !telefone) {
          businessFormStatus.textContent = 'Por favor, preencha Nome, E-mail e Telefone.';
          businessFormStatus.className = 'error';
          valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          businessFormStatus.textContent = 'E-mail inválido.';
          businessFormStatus.className = 'error';
          valid = false;
        } else if (!/^(\(?\d{2}\)?\s?\d{4,5}-?\d{4})$/.test(telefone)) {
          businessFormStatus.textContent = 'Telefone inválido.';
          businessFormStatus.className = 'error';
          valid = false;
        }
        if (!valid) return;

        businessFormStatus.textContent = 'Obrigado! Sua solicitação de contato foi enviada. Retornaremos em breve.';
        businessFormStatus.className = 'success';
        setTimeout(() => {
          businessForm.reset();
          businessFormStatus.textContent = '';
          businessFormStatus.className = '';
        }, 5000);
      });
    }
  }, []); // O array vazio garante que o código seja executado apenas uma vez

  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* Seção Hero */}
      <header className="hero-section">
        <div className="container hero-content">
          <h1>Gestor ClimaTech</h1>
          <p className="subheadline">
            A solução completa para técnicos e empresas de ar-condicionado.
          </p>
          <a href="#planos" className="cta-button principal">Comece Agora</a>
        </div>
      </header>

      <main id="main-content">
        {/* Seção: Problema / Para Quem é */}
        <section className="problema-solucao">
          <div className="container">
            <h2>Cansado de Perder Datas, Clientes e Dinheiro?</h2>
            <div className="cards-problema">
              <div className="card">🤯 Agenda em Papel? Lembretes que falham?</div>
              <div className="card">💸 Dificuldade em saber quem pagou e o que você gastou?</div>
              <div className="card">❓ Não lembra o histórico de serviço do cliente?</div>
              <div className="card">👥 (Empresas) Difícil coordenar a equipe e saber o status de cada serviço?</div>
            </div>
            <p className="solucao-intro">
              O <strong>Gestor ClimaTech</strong> organiza tudo isso para você, em um só lugar, acessível de onde estiver.
            </p>
          </div>
        </section>

        {/* Seção de Benefícios Principais */}
        <section className="beneficios-section">
          <div className="container">
            <h2>Benefícios</h2>
            <div className="beneficios-grid">
              <div className="beneficio-item">
                <span className="icon">📅</span>
                <h3>Agendamento Fácil</h3>
                <p>Organize seus compromissos com facilidade.</p>
              </div>
              <div className="beneficio-item">
                <span className="icon">💰</span>
                <h3>Controle Financeiro</h3>
                <p>Gerencie receitas e despesas de forma eficiente.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Recursos Detalhados */}
        <section id="recursos" className="recursos-section">
          <div className="container">
            <h2>Recursos Poderosos para Facilitar seu Dia a Dia:</h2>
            <ul>
              <li>Agenda Inteligente com Visão Diária, Semanal e Mensal</li>
              <li>Lembretes Automáticos de Próxima Manutenção</li>
              <li>Cadastro Completo de Clientes e Equipamentos</li>
              <li>Controle de Contas a Receber e Despesas</li>
              <li>Geração de Ordens de Serviço Digitais (PDF)</li>
              <li>Relatórios de Faturamento e Serviços</li>
              <li>Gestão de Múltiplos Usuários e Permissões (Business)</li>
              <li>Acesso via Web e App Mobile (se aplicável)</li>
            </ul>
          </div>
        </section>

        {/* Seção de Planos e Preços */}
        <section id="planos" className="planos-section">
          <div className="container">
            <h2>Escolha o Plano Ideal para Você ou Sua Empresa:</h2>
            <div className="pricing-table">
              {/* Plano Free */}
              <div className="plan-card free">
                <h3>Free</h3>
                <p className="plan-description">Ideal para começar a organizar</p>
                <div className="price">
                  R$ 0<span className="period">/mês</span>
                </div>
                <ul className="features-list">
                  <li>Até 10 Clientes Ativos</li>
                  <li>Agenda Básica</li>
                  <li>Cadastro de Serviços</li>
                  <li className="not-included">Controle Financeiro</li>
                  <li className="not-included">Lembretes Automáticos</li>
                  <li className="not-included">Gestão de Equipe</li>
                </ul>
                <a href="/signup?plan=free" className="cta-button secondary" aria-label="Começar grátis no plano Free">
                  Comece Grátis
                </a>
              </div>

              {/* Plano Pro (Individual) - Popular */}
              <div className="plan-card pro popular">
                <span className="popular-badge">Mais Popular</span>
                <h3>Pro</h3>
                <p className="plan-description">Perfeito para o técnico autônomo</p>
                <div className="price">
                  R$ 49<span className="period">/mês</span>
                </div>
                <ul className="features-list">
                  <li>Clientes Ilimitados</li>
                  <li>Agenda Inteligente Completa</li>
                  <li>Cadastro de Serviços e Histórico</li>
                  <li>Controle Financeiro Detalhado</li>
                  <li>Lembretes Automáticos</li>
                  <li>Orçamentos e OS Digital</li>
                  <li>Relatórios Básicos</li>
                  <li className="not-included">Gestão de Equipe</li>
                </ul>
                <a href="/signup?plan=pro" className="cta-button principal" aria-label="Assinar plano Pro">
                  Assinar o Pro
                </a>
              </div>

              {/* Plano Business */}
              <div className="plan-card business">
                <h3>Business</h3>
                <p className="plan-description">Para empresas com equipes</p>
                <div className="price">
                  R$ 129*<span className="period">/mês</span>
                </div>
                <p className="business-note">*Base para 3 usuários. Consulte para mais.</p>
                <ul className="features-list">
                  <li>Tudo do Plano Pro</li>
                  <li>Gestão de Múltiplos Técnicos</li>
                  <li>Atribuição de Tarefas</li>
                  <li>Relatórios Avançados por Equipe</li>
                  <li>Permissões de Acesso</li>
                  <li>Suporte Prioritário</li>
                </ul>
                <a href="#contato-business" className="cta-button" aria-label="Falar sobre o plano Business">
                  Fale Conosco
                </a>
              </div>
            </div>
            <p className="anual-discount">Economize XX% assinando o plano anual!</p>
          </div>
        </section>

        {/* Seção de Prova Social */}
        <section id="depoimentos-app" className="depoimentos-section">
          <div className="container">
            <h2>Quem Usa, Recomenda:</h2>
            <div className="depoimento-card">
              <p>
                "Finalmente uma ferramenta que entende a nossa rotina! Organizei meus retornos e não perco mais serviço. O plano Pro vale cada centavo."
              </p>
              <span className="cliente-nome">- Carlos Alberto, Técnico Autônomo</span>
            </div>
            <div className="depoimento-card">
              <p>
                "Implantamos o plano Business na empresa e a comunicação com a equipe melhorou 100%. Agora sei onde cada técnico está e o status dos serviços em tempo real."
              </p>
              <span className="cliente-nome">- Mariana Silva, Gestora - Clima Certo Ltda.</span>
            </div>
          </div>
        </section>

        {/* Seção CTA Final / Contato Business */}
        <section id="contato-business" className="cta-final-section">
          <div className="container">
            <h2>Pronto para Elevar o Nível da Sua Gestão?</h2>
            <p>Comece hoje mesmo a organizar seus serviços, finanças e equipe com o Gestor ClimaTech.</p>
            <a href="/signup?plan=free" className="cta-button principal large" aria-label="Experimente o Plano Grátis Agora">
              Experimente o Plano Grátis Agora!
            </a>

            <div className="business-contact-form">
              <h3>Interessado no Plano Business?</h3>
              <p>Preencha o formulário abaixo ou ligue para entendermos sua necessidade e oferecermos a melhor solução.</p>
              <form id="business-form" autoComplete="off" aria-label="Formulário de contato para plano Business">
                <label htmlFor="empresa" className="sr-only">
                  Nome da Empresa
                </label>
                <input type="text" id="empresa" name="empresa" placeholder="Nome da Empresa" required />

                <label htmlFor="nome_contato" className="sr-only">
                  Seu Nome
                </label>
                <input type="text" id="nome_contato" name="nome_contato" placeholder="Seu Nome" required />

                <label htmlFor="email" className="sr-only">
                  Seu E-mail
                </label>
                <input type="email" id="email" name="email" placeholder="Seu E-mail" required />

                <label htmlFor="telefone" className="sr-only">
                  Seu Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="Seu Telefone/WhatsApp"
                  required
                  pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}"
                />

                <label htmlFor="mensagem" className="sr-only">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Quantos técnicos na equipe? Alguma necessidade específica?"
                  rows="3"
                ></textarea>
                <button type="submit" className="cta-button">
                  Solicitar Contato
                </button>
                <p id="business-form-status" aria-live="polite"></p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="faq-section">
          <div className="container">
            <h2>Perguntas Frequentes</h2>
            <details>
              <summary>Posso cancelar quando quiser?</summary>
              <p>
                Sim, você pode cancelar sua assinatura a qualquer momento. Para planos pagos, o acesso continua até o fim do período já pago.
              </p>
            </details>
            <details>
              <summary>Meus dados estão seguros?</summary>
              <p>
                Levamos a segurança a sério. Utilizamos criptografia, backups automáticos e servidores seguros para proteger suas informações.
              </p>
            </details>
            <details>
              <summary>Como funciona o suporte?</summary>
              <p>
                Oferecemos suporte por e-mail e chat para todos os planos. O Plano Business conta com suporte prioritário.
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>
            © <span id="current-year"></span> Gestor ClimaTech - Todos os direitos reservados.
          </p>
          <p>
            <a href="/termos">Termos de Uso</a> | <a href="/privacidade">Política de Privacidade</a>
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;