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

 const btnHamburguer = document.getElementById('btnHamburguer');
  const menuMobile = document.getElementById('menuMobile');
  const overlay = document.getElementById('overlay');

  btnHamburguer.addEventListener('click', () => {
    btnHamburguer.classList.toggle('active');
    menuMobile.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  // Fechar ao clicar no overlay
  overlay.addEventListener('click', () => {
    btnHamburguer.classList.remove('active');
    menuMobile.classList.remove('active');
    overlay.classList.remove('active');
  });

  // Fechar ao clicar em algum link do menu (opcional)
  document.querySelectorAll('.menu-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      btnHamburguer.classList.remove('active');
      menuMobile.classList.remove('active');
      overlay.classList.remove('active');
    });
  });