
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const giveMeBody = document.querySelector('body');
let timer = null;

startBtn.addEventListener("click", () => {
    timer = setInterval(() => {
        giveMeBody.style.backgroundColor = getRandomHexColor();
    startBtn.setAttribute('disabled', true);    
  }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timer);
    startBtn.removeAttribute('disabled');    
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

