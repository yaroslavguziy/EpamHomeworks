function reverseelber(el) {
  // return parseFloat(el.toString().split('').reverse().join('')) * Math.sign(el);
  const regExp = /[0-9]/;
  const mathSymbol = el.toString().charAt(0);
  const exp = regExp.test(mathSymbol);
  let number = exp ? el : +el.toString().slice(1);
  let revEl = 0;
  if (number > 0) {
    while (number) {
      revEl = revEl * 10 + (number % 10);
      number = Math.floor(number / 10);
    }
  }
  // console.log(el, mathSymbol);
  // return revEl;
  return exp ? revEl : +(mathSymbol + revEl);
}
console.log(reverseelber(12345));

console.log(reverseelber(-56789));

function forEach(arr, func) {
  for (let el of arr) {
    func(el);
  }
}

forEach([2, 5, 8], function (el) {
  console.log(el);
});

function map(arr, func) {
  let newArray = [];
  forEach(arr, function (el) {
    newArray.push(func(el));
  });
  return newArray;
}

console.log(
  map([2, 5, 8], function (el) {
    return el + 3;
  })
);

console.log(
  map([1, 2, 3, 4, 5], function (el) {
    return el * 2;
  })
);

function filter(arr, func) {
  let newArray = [];
  forEach(arr, function (el) {
    if (func(el)) {
      newArray.push(el);
    }
  });
  return newArray;
}
console.log(
  filter([2, 5, 1, 3, 8, 6], function (el) {
    return el > 3;
  })
);

console.log(
  filter([1, 4, 6, 7, 8, 10], function (el) {
    return el % 2 === 0;
  })
);

let data = [
  {
    _id: '5b5e3168c6bf40f2c1235cd6',
    index: 0,
    age: 39,
    eyeColor: 'green',
    name: 'Stein',
    favoriteFruit: 'apple',
  },
  {
    _id: '5b5e3168e328c0d72e4f27d8',
    index: 1,
    age: 38,
    eyeColor: 'blue',
    name: 'Cortez',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '5b5e3168cc79132b631c666a',
    index: 2,
    age: 2,
    eyeColor: 'blue',
    name: 'Suzette',
    favoriteFruit: 'apple',
  },
  {
    _id: '5b5e31682093adcc6cd0dde5',
    index: 3,
    age: 17,
    eyeColor: 'green',
    name: 'Weiss',
    favoriteFruit: 'banana',
  },
];
function getAdultAppleLovers(data) {
  return map(
    filter(data, (el) => el.age > 18 && el.favoriteFruit === 'apple'),
    ({ name }) => name
  );
}
console.log(getAdultAppleLovers(data));

function getKeys(obj) {
  let newArray = [];
  for (let key in obj) {
    newArray.push(key);
  }
  return newArray;
}
console.log(getKeys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

function getValues(obj) {
  let newArray = [];
  for (let value in obj) {
    newArray.push(obj[value]);
  }
  return newArray;
}
console.log(getValues({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

function showFormattedDate(dateObj) {
  const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let year = dateObj.getFullYear();
  let month = monthArray[dateObj.getMonth()];
  let day = dateObj.getDate();
  // let year = dateObj.toString().slice(11, 15);
  // // console.log(dateObj.toString());
  // let month = dateObj.toString().slice(4, 7);
  // let day = dateObj.toString().slice(8, 10);

  return `It's ${day} of ${month}, ${year} `;
}
console.log(showFormattedDate(new Date('2018-08-27T01:10:00')));

// returns ‘It is 27 of Aug, 2018’
// every month should be showed as 3 letters (e.g. Feb, Apr or Dec)
