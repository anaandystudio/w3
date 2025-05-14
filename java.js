// Basic carousel logic for one carousel
const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const images = carousel.querySelectorAll('.carousel_image');
  const nextBtn = carousel.querySelector('.next');
  const prevBtn = carousel.querySelector('.prev');
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % images.length;
    showImage(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  });
});