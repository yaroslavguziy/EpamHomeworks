const form = document.querySelector('.form');
const inputName = document.querySelector('#name');
const inputTime = document.querySelector('#time');
const inputPlace = document.querySelector('#place');
const regExp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/;

const meeting = prompt('Enter your meeting', 'meeting');

// function inputsValidate(inputName, inputTime, inputPlace, form) {
//   if (form.onsubmit()) {
//     if (inputName.value === undefined || inputTime.value === undefined || inputPlace.value === undefined) {
//       alert('Input all data');
//     }
//   }
// }
// inputsValidate();

function eventHelper() {
  if (meeting === 'meeting') {
    form.style.display = 'block';
  }

  if (inputTime.value === regExp) {
    alert('Enter time in format hh:mm');
  }
}
eventHelper();
