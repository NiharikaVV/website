function hello() {
    var name = "Niharika";
    alert(name);
}
function applyBold() {
    var elements = document.getElementsByTagName("*");

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontWeight = "bold";
    }
}
function removeBold() {
    var elements = document.getElementsByTagName("*");

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.fontWeight = "";
    }
}
var currentImageIndex = 0;
var images = ["images/cookie1.jpg", "images/cookie2.jpg", "images/cookie3.jpg"];

function changeImage() {
    var imgElement = document.getElementById("cookie-image");
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElement.src = images[currentImageIndex];
}
function DarkModeToggle(){
const toggleSlider = document.getElementById('dark-mode-switch');
const body = document.body;
toggleSlider.addEventListener('change', function () {
    if (this.checked) {
        body.style.backgroundColor = 'grey';
    } else {
        body.style.backgroundColor = '#f2f2f2';
    }
});
}
const displayRandomJoke = () => {
    const jokeElement = document.getElementById('joke'); 
    fetch('https://official-joke-api.appspot.com/random_joke') 
      .then(response => response.json())
      .then(data => {
        jokeElement.innerHTML = `<strong></strong> ${data.setup}<br><strong></strong> ${data.punchline}`;
      })
      .catch(error => console.error(error));
  };
  const getJokeBtn = document.getElementById('new-joke');
  getJokeBtn.addEventListener('click', displayRandomJoke); 