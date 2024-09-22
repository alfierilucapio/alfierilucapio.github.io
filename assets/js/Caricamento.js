const video = document.getElementById('video_caricamento');
const mainContent = document.getElementById('main-content');

video.addEventListener('ended', () => {
  mainContent.style.display = 'block';
  video.style.display = 'none';
});