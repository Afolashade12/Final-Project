const images = ["images/BS1.jpeg", "images/BS2.jpeg", "images/BS3.jpeg", "images/BS4.jpeg", "images/BS5.jpeg"];
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
