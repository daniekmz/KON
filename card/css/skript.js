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