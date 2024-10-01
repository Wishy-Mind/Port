document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const rotationAngle = window.scrollY / 3; // Adjust the divisor for rotation speed
        document.getElementById('rotatingDiv').style.transform = `rotate(${rotationAngle}deg)`;
    });
});

const welcomeText = "Welcome to my little corner of the internet!";
const goodbyeText = "Thanks to you, you'll discover more about me! :)";

const maxTextLength = Math.max(welcomeText.length, goodbyeText.length);

let scrollingDown = false;
let currentText = welcomeText;


window.onload = () => {
  changeText(currentText);
}

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  
  if (scrollPosition > 50 && !scrollingDown) {
    scrollingDown = true;
    currentText = goodbyeText.padEnd(maxTextLength, ' ');
    changeText(currentText);
  } else if (scrollPosition <= 50 && scrollingDown) {
    scrollingDown = false;
    currentText = welcomeText;
    changeText(currentText);
  }
});

function changeText(text) {
  const letters = document.querySelectorAll('.letter');

  // Ensure we have enough span elements to accommodate the longest text
  if (letters.length < maxTextLength) {
    const diff = maxTextLength - letters.length;
    for (let i = 0; i < diff; i++) {
      const span = document.createElement('span');
      span.classList.add('letter');
      document.getElementById('scrollingDiv').appendChild(span);
    }
  }
  
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.style.opacity = 0;
      letter.style.color = "rgb(30, 30, 30)";
      letter.textContent = text[index] || '';
      setTimeout(() => {
        letter.style.opacity = 1;
        letter.style.color = "rgb(132, 0, 255)";
        setTimeout(() => {
          letter.style.color = "rgb(30, 30, 30)";
        }, 2000);
      }, 10 * index); // Adjust the delay between each letter appearance
    }, 10 * index); // Adjust the delay between each letter disappearance
  });
}
