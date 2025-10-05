const slides = document.querySelectorAll('.slides img');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Mostrar la primera imagen al cargar
showSlide(currentIndex);
