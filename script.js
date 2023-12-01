// Define an array of audio file URLs
const audioFiles = [
    'audio/audio1.mp3',
    'audio/audio2.mp3',
    // Add more audio file URLs as needed
  ];
  
  // Function to play a random audio
  function playRandomAudio() {
    // Get a random index from the array
    const randomIndex = Math.floor(Math.random() * audioFiles.length);
    
    // Create an <audio> element
    const audio = new Audio(audioFiles[randomIndex]);
    
    // Play the audio
    audio.play();
  }
  
  // Add click event listener to the button
  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', playRandomAudio);
  