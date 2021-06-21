const isEqual = (a, b) => a === b;

const isBigger = (a, b) => a > b;

const storeNames = (...names) => Array.from(names);

const getDifference = (firstNum, secondNum) => {
  return +firstNum > +secondNum ? firstNum - secondNum : secondNum - firstNum;
};

function negativeCount(...numbers) {
  let counter = 0;

  numbers.forEach((number) => {
    if (+number < 0) {
      counter++;
    }
  });

  return counter;
}

function letterCount(str1, str2) {
  let counter = 0;

  for (let letter of str1) {
    if (letter.includes(str2)) {
      counter++;
    }
  }

  return counter;
}

function countPoints(...scores) {
  let counter = 0;

  scores.forEach((result) => {
    const pointsArr = result.split(':');
    const firstPoints = +pointsArr[0];
    const secondPoints = +pointsArr[1];

    if (firstPoints > secondPoints) {
      counter = counter + 3;
    } else if (firstPoints === secondPoints) {
      counter = counter + 1;
    }
  });

  return counter;
}
