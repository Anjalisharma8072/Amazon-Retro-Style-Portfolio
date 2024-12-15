const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

playButton.addEventListener('click', (e) => {
  e.preventDefault(); 

  if (audioPlayer.paused) {
    audioPlayer.play(); 
    playButton.innerHTML = '<i class="fas fa-pause-circle"></i> Pause Music'; 
  } else {
    audioPlayer.pause(); 
    playButton.innerHTML = '<i class="fas fa-play-circle"></i> Play Music'; 
  }
});
window.onload = function () {
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 2000);
};

document.getElementById("go-button").addEventListener("click", function () {
  window.location.href = "index.html";
});

