function toggleIconsByScreen() {
  const iconDesktop = document.getElementById('iconDesktop');
  const iconPhone = document.getElementById('iconPhone');

  if (window.innerWidth < 992) {
    iconDesktop.style.display = 'none';
    iconPhone.style.display = 'block';
  } else {
    iconDesktop.style.display = 'block';
    iconPhone.style.display = 'none';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  toggleIconsByScreen();

  // razzo
  const razzo = document.getElementById('razzo');
  const homeSection = document.querySelector('section');

  window.addEventListener('scroll', () => {
    const limite = homeSection.offsetTop + homeSection.offsetHeight;
    if (window.scrollY > limite) {
      razzo.style.display = 'block';
    } else {
      razzo.style.display = 'none';
    }

    // Effetto sfondo dinamico "Perché scegliere noi"
    const percheSection = document.getElementById('perche-noi');
    if (percheSection) {
      const rect = percheSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const totalHeight = window.innerHeight + rect.height;
        const scrollPercent = 1 - (rect.bottom / totalHeight);

        const startColor = [255, 255, 255];   // bianco
        const endColor = [178, 191, 252];     //rgb(178, 191, 252)

        const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollPercent);
        const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollPercent);
        const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollPercent);

        percheSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      }
    }
  });

  razzo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

window.addEventListener('resize', toggleIconsByScreen);