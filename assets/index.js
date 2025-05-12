let drums = document.querySelectorAll('.drum');

//click event listener
drums.forEach((drum) => {
  drum.addEventListener('click', function () {
    let buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });
});

//keydown event listener
document.addEventListener('keydown', function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case 'w':
      let crash = new Audio('./assets/sounds/crash.mp3');
      crash.play();
      break;

    case 'a':
      let tom1 = new Audio('./assets/sounds/tom-1.mp3');
      tom1.play();
      break;

    case 's':
      let snare = new Audio('./assets/sounds/snare.mp3');
      snare.play();
      break;

    case 'd':
      let bass = new Audio('./assets/sounds/kick-bass.mp3');
      bass.play();
      break;

    case 'j':
      let tom2 = new Audio('./assets/sounds/tom-2.mp3');
      tom2.play();
      break;

    case 'k':
      let tom3 = new Audio('./assets/sounds/tom-3.mp3');
      tom3.play();
      break;

    case 'l':
      let tom4 = new Audio('./assets/sounds/tom-4.mp3');
      tom4.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add('pressed');

  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}
