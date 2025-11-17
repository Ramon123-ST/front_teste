const slides = document.querySelectorAll('.slide');
let current = 0;

function showNext() {
  slides[current].classList.remove('active');

  current = (current + 1) % slides.length;

  slides[current].classList.add('active');

  // Troca o fundo do hero
  const bg = slides[current].getAttribute('data-bg');
  document.querySelector('.heroi').style.background = bg;
}

// Inicia o fundo corretamente
document.querySelector('.heroi').style.background = slides[0].getAttribute('data-bg');

// Troca a cada 4s
setInterval(showNext, 4000);
