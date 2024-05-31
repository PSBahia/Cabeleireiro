// script.js
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');

  function handleScroll() {
      const windowHeight = window.innerHeight;
      images.forEach(image => {
          const rect = image.getBoundingClientRect();
          if (rect.top <= windowHeight - 100) {
              image.style.opacity = 1;
              image.style.transform = 'translateX(0)';
          }
      });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Para verificar a posição das imagens ao carregar a página
});
