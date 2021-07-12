function getMaxEvenElement(arr) {
  return arr.reduce((a, b) => +a > +b ? +a : +b);
}

let a = 3;
let b = 5;

[a, b] = [b, a];

const getValue = (value) => value ?? '-';

const getObjFromArray = (array) => Object.fromEntries(array);

const addUniqueId = (obj) => {
  const id = Symbol();
  return { ...obj, id };
};

const getRegroupedObj = (obj) => {
  const {
    name: firstName,
    details: { id, age, university }
  } = obj;
  const user = { age, firstName, id };
  return { university, user };
};

const getArrayWithUniqueElements = (arr) => [...new Set(arr)];

const hideNumber = (number) => {
  return number.replace(/.(?=\d{4})/g, '*');
};

const required = () => {
  throw new Error(`Paramater is required`);
};

const add = (a = required(), b = required()) => a + b;

function* generateIterableSequence(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}

const generatorObject = generateIterableSequence(['I', 'love', 'EPAM']);

for (let value of generatorObject) {
  console.log(value);
}
