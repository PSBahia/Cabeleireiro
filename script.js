// script.js
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');

  function handleScroll() {
      const windowHeight = window.innerHeight;
      images.forEach(image => {
          const rect = image.getBoundingClientRect();
          if (rect.top <= windowHeight - 100 && rect.bottom >= 0) {
              // Quando a imagem está na área visível
              image.style.opacity = 1;
              image.style.transform = 'translateY(0)';
          } else {
              // Quando a imagem está fora da área visível
              image.style.opacity = 0;
              image.style.transform = 'translateY(20px)';
          }
      });
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Para verificar a posição das imagens ao carregar a página
});
