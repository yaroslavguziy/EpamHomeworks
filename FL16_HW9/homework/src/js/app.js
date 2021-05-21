const form = document.querySelector('#form');
const inputName = document.querySelector('#name');
const inputTime = document.querySelector('#time');
const inputPlace = document.querySelector('#place');
const regExp = new RegExp(/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$/);
const converter = document.querySelector('#converter');

const meeting = prompt('Enter your meeting', 'meeting');

function eventHelper() {
  if (meeting === 'meeting') {
    form.style.display = 'block';
  }
}
eventHelper();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

converter.addEventListener('click', () => {
  moneyConverter();
});

function moneyConverter() {
  const dollarCourse = 27.43;
  const evroCourse = 33.48;
  const euro = +prompt('enter amount of euro', '');
  const dollars = +prompt('enter amount of dollars', '');

  if (euro > 0 && dollars > 0) {
    const eurToUah = (evroCourse * euro).toFixed(2);
    const usdToUah = (dollarCourse * euro).toFixed(2);
    alert(`${euro} euros are equal ${eurToUah}.hrns, ${dollars} dollars are equal ${usdToUah}hrns`);
  }
}

function checkInputs() {
  const userName = inputName.value.trim();
  const userTime = inputTime.value.trim();
  const userPlace = inputPlace.value.trim();

  if (userName === '' || userTime === '' || userPlace === '') {
    alert('Input all data');
    return false;
  } else if (!regExp.test(userTime)) {
    alert('Enter time in format hh:mm');
    return false;
  } else {
    return console.log(`${userName} has a meeting today at ${userTime} somewhere in ${userPlace}`);
  }
}
