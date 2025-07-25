const images = ["BS1.jpeg", "BS2.jpeg", "BS3.jpeg", "BS4.jpeg", "BS5.jpeg"];
let index = 0;
const slideshowDiv = document.getElementById("background-slideshow");

function changeBackground() {
  if (!slideshowDiv) return;
  slideshowDiv.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

window.onload = function() {
  changeBackground();
  setInterval(changeBackground, 5000);
};
