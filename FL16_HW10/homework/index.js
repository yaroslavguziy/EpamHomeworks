const isEqual = (a, b) => a === b;
console.log(isEqual(6, 6));

const isBigger = (a, b) => a > b;
console.log(isBigger(9, 7));

const storeNames = (...names) => Array.from(names);

console.log(storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy'));

const getDifference = (firstNum, secondNum) => {
  return +firstNum > +secondNum ? firstNum - secondNum : secondNum - firstNum;
};

console.log('getDifference', getDifference(3, 5));

function negativeCount(numbers) {
  let counter = 0;

  numbers.forEach((number) => {
    if (+number < 0) {
      counter++;
    }
  });

  return counter;
}

console.log('negativeCount', negativeCount([4, -3, 22, 9]));

function letterCount(str1, str2) {
  let counter = 0;

  for (let letter of str1) {
    if (letter.includes(str2)) {
      counter++;
    }
  }

  return counter;
}

console.log('letterCount', letterCount('Marry', 'y'));

function countPoints(scores) {
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

console.log('countPoints', countPoints(['100:90', '110:98', '100:100', '95:46', '54:90', '99:44', '90:90', '111:100']));
