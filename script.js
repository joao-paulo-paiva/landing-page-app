document.addEventListener('DOMContentLoaded', function() {
    // Atualizar ano no rodapé
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth Scroll para links internos (âncoras)
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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
        businessForm.addEventListener('submit', function(e) {
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
});
