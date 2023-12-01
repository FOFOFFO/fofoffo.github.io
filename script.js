// Define an array of audio file URLs
const audioFiles = [
    'audio/audio1.mp3',
    'audio/audio2.mp3',
    'audio/audio3.mp3',
    'audio/audio4.mp3',
    'audio/audio5.mp3',
    'audio/audio6.mp3',
    'audio/audio7.mp3',
    'audio/audio8.mp3',
    'audio/audio9.mp3',
    'audio/audio10.mp3',
    'audio/audio11.mp3',
    'audio/audio12.mp3',
    'audio/audio13.mp3',
    'audio/audio14.mp3',
    'audio/audio15.mp3',
    'audio/audio16.mp3',
    'audio/audio17.mp3',
    'audio/audio18.mp3',
    'audio/audio19.mp3',
    'audio/audio20.mp3',
    'audio/audio21.mp3',
    'audio/audio22.mp3',
    'audio/audio23.mp3',
    'audio/audio24.mp3',
    'audio/audio25.mp3',
    'audio/audio26.mp3',
    'audio/audio27.mp3',
    'audio/audio28.mp3',
    'audio/audio29.mp3',
    'audio/audio30.mp3',
    'audio/audio31.mp3',
    'audio/audio32.mp3',
    'audio/audio33.mp3',
    'audio/audio34.mp3',
    'audio/audio35.mp3',
    'audio/audio36.mp3',
    'audio/audio37.mp3',
    'audio/audio38.mp3',
    'audio/audio39.mp3',
    'audio/audio40.mp3',
    'audio/audio41.mp3',
    'audio/audio42.mp3',
    'audio/audio43.mp3',
    'audio/audio44.mp3',
    'audio/audio45.mp3',
    'audio/audio46.mp3',
    'audio/audio47.mp3',
    'audio/audio48.mp3',
    'audio/audio49.mp3',
    'audio/audio50.mp3',
    'audio/audio51.mp3',
    'audio/audio52.mp3',
    'audio/audio53.mp3',
    'audio/audio54.mp3',
    'audio/audio55.mp3',
    'audio/audio56.mp3',
    'audio/audio57.mp3',
    'audio/audio58.mp3',
    'audio/audio59.mp3',
    'audio/audio60.mp3',
    'audio/audio61.mp3',
    'audio/audio62.mp3',
    'audio/audio63.mp3',
    'audio/audio64.mp3',
    'audio/audio65.mp3',
    'audio/audio66.mp3',
    'audio/audio67.mp3',
    'audio/audio68.mp3',
    'audio/audio69.mp3',
    'audio/audio70.mp3',
    'audio/audio71.mp3',
    'audio/audio72.mp3',
    'audio/audio73.mp3',
    'audio/audio74.mp3',
    'audio/audio75.mp3',
    'audio/audio76.mp3',
    'audio/audio77.mp3',
    'audio/audio78.mp3',
    'audio/audio79.mp3',
    'audio/audio80.mp3',
    'audio/audio81.mp3',
    'audio/audio82.mp3',
    'audio/audio83.mp3',
    'audio/audio84.mp3',
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
  