let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}
// Confetti animation

function createConfetti() {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
  const numberOfConfetti = 100;
  const container = document.getElementById('confetti');
  
  for (let i = 0; i < numberOfConfetti; i++) {
      const confettiPiece = document.createElement('div');
      confettiPiece.classList.add('confetti-piece');
      confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confettiPiece.style.width = `${Math.random() * 10 + 5}px`;
      confettiPiece.style.height = confettiPiece.style.width;
      confettiPiece.style.position = 'absolute';
      confettiPiece.style.left = `${Math.random() * 100}%`;
      confettiPiece.style.top = `${Math.random() * 100}%`;
      container.appendChild(confettiPiece);
      
      // Animation
      const animationDuration = Math.random() * 3 + 2;
      const rotateDegree = Math.random() * 360;
      confettiPiece.style.animation = `confetti-fall ${animationDuration}s linear infinite, confetti-rotate ${animationDuration}s linear infinite`;
      confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
      confettiPiece.style.transform = `rotate(${rotateDegree}deg)`;
  }
}

document.addEventListener('DOMContentLoaded', createConfetti);
function createFallingLove() {
  const container = document.getElementById('falling-love');
  const numberOfPieces = 30;
  const colors = ['#ff4d4d', '#ff6f61', '#ff8c8c'];

  for (let i = 0; i < numberOfPieces; i++) {
      const lovePiece = document.createElement('div');
      lovePiece.classList.add('love-piece');
      lovePiece.textContent = '❤️';
      lovePiece.style.left = `${Math.random() * 100}vw`;
      lovePiece.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
      lovePiece.style.fontSize = `${Math.random() * 2 + 1}rem`;
      lovePiece.style.color = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(lovePiece);
  }
}

document.addEventListener('DOMContentLoaded', createFallingLove);
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('background-music');

  // Try to play the audio
  const playAudio = () => {
      audio.play().catch(error => {
          // Handle the error, such as informing the user to interact with the page
          console.log('Auto-play blocked. Please interact with the page to start the music.');
      });
  };

  // Play audio after a user interaction (e.g., click)
  document.addEventListener('click', playAudio);

  // Optional: Play audio as soon as page loads, if possible
  playAudio();
});
