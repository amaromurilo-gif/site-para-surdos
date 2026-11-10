document.addEventListener('DOMContentLoaded', () => {
  // 1. Alto Contraste
  const btnContrast = document.getElementById('btn-contrast');
  btnContrast.addEventListener('click', () => {
    document.body.classList.remove('theme-calm');
    document.getElementById('btn-calm').setAttribute('aria-pressed', 'false');
    document.getElementById('btn-calm').classList.remove('active');

    const isActive = document.body.classList.toggle('theme-high-contrast');
    btnContrast.setAttribute('aria-pressed', isActive);
    btnContrast.classList.toggle('active', isActive);
  });

  // 2. Modo Calmo (Tema Escuro Suave)
  const btnCalm = document.getElementById('btn-calm');
  btnCalm.addEventListener('click', () => {
    document.body.classList.remove('theme-high-contrast');
    document.getElementById('btn-contrast').setAttribute('aria-pressed', 'false');
    document.getElementById('btn-contrast').classList.remove('active');

    const isActive = document.body.classList.toggle('theme-calm');
    btnCalm.setAttribute('aria-pressed', isActive);
    btnCalm.classList.toggle('active', isActive);
  });

  // 3. Tamanho da Fonte
  let fontScale = 1;
  const btnFontIncrease = document.getElementById('btn-font-increase');
  const btnFontDecrease = document.getElementById('btn-font-decrease');

  btnFontIncrease.addEventListener('click', () => {
    if (fontScale < 1.4) {
      fontScale += 0.1;
      document.documentElement.style.setProperty('--font-scale', `${fontScale}rem`);
    }
  });

  btnFontDecrease.addEventListener('click', () => {
    if (fontScale > 0.8) {
      fontScale -= 0.1;
      document.documentElement.style.setProperty('--font-scale', `${fontScale}rem`);
    }
  });

  // 4. Reduzir Movimento
  const btnMotion = document.getElementById('btn-motion');
  btnMotion.addEventListener('click', () => {
    const isActive = document.body.classList.toggle('reduce-motion');
    btnMotion.setAttribute('aria-pressed', isActive);
    btnMotion.classList.toggle('active', isActive);
  });

  // 5. Linha Guia de Leitura
  const btnGuide = document.getElementById('btn-guide');
  const readingGuide = document.getElementById('reading-guide');
  let guideActive = false;

  btnGuide.addEventListener('click', () => {
    guideActive = !guideActive;
    btnGuide.setAttribute('aria-pressed', guideActive);
    btnGuide.classList.toggle('active', guideActive);
    readingGuide.style.display = guideActive ? 'block' : 'none';
  });

  document.addEventListener('mousemove', (e) => {
    if (guideActive) {
      readingGuide.style.top = `${e.clientY}px`;
    }
  });

  // 6. Validação de Formulário Acessível
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
      const errorMsg = document.getElementById(`error-${input.id}`);
      if (!input.checkValidity()) {
        input.classList.add('invalid');
        if (errorMsg) errorMsg.style.display = 'block';
        isValid = false;
      } else {
        input.classList.remove('invalid');
        if (errorMsg) errorMsg.style.display = 'none';
      }
    });

    if (isValid) {
      alert('Mensagem enviada com sucesso!');
      form.reset();
    }
  });
});