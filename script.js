let currentSlide = 1;
const totalSlides = 9;

function showSlide(slideNumber) {
  document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.remove('active');
  });
  document.getElementById(`slide${slideNumber}`).classList.add('active');
}

// Automatically move to the next slide after a delay
function autoSlide() {
  currentSlide = (currentSlide % totalSlides) + 1;
  showSlide(currentSlide);
  setTimeout(autoSlide, 5000); // Change slide every 5 seconds
}

// Button Interactions
document.getElementById('yesBtn').addEventListener('click', () => {
  currentSlide = 5;
  showSlide(currentSlide);
});

document.getElementById('noBtn').addEventListener('click', () => {
  currentSlide = 4;
  showSlide(currentSlide);
});

document.getElementById('okBtn').addEventListener('click', () => {
  currentSlide = 5;
  showSlide(currentSlide);
});

document.getElementById('turnOffLightsBtn').addEventListener('click', () => {
  document.body.style.backgroundColor = 'black';
  setTimeout(() => {
    document.body.style.backgroundColor = '#ffcccb';
    currentSlide = 6;
    showSlide(currentSlide);
  }, 6000); // Disco lights for 6 seconds
});

document.getElementById('releaseBalloonsBtn').addEventListener('click', () => {
  const balloons = document.querySelectorAll('.balloon');
  balloons.forEach(balloon => {
    balloon.style.animation = 'floatBalloon 5s ease-in-out forwards';
  });
  setTimeout(() => {
    currentSlide = 7;
    showSlide(currentSlide);
  }, 5000); // Move to next slide after 5 seconds
});

// Start auto-slide
setTimeout(autoSlide, 5000); // Start after 5 seconds