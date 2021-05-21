function reverseelber(el) {
  const regExp = /[0-9]/;
  const mathSymbol = el.toString().charAt(0);
  const exp = regExp.test(mathSymbol);
  let number = exp ? el : +el.toString().slice(1);
  let revEl = 0;
  if (number > 0) {
    while (number) {
      revEl = revEl * 10 + number % 10;
      number = Math.floor(number / 10);
    }
  }

  return exp ? revEl : +(mathSymbol + revEl);
}

function forEach(arr, func) {
  for (let el of arr) {
    func(el);
  }
}

function map(arr, func) {
  let newArray = [];
  forEach(arr, function (el) {
    newArray.push(func(el));
  });
  return newArray;
}

function filter(arr, func) {
  let newArray = [];
  forEach(arr, function (el) {
    if (func(el)) {
      newArray.push(el);
    }
  });
  return newArray;
}

function getAdultAppleLovers(data) {
  return map(
    filter(data, (el) => el.age > 18 && el.favoriteFruit === 'apple'),
    ({ name }) => name
  );
}

function getKeys(obj) {
  let newArray = [];
  for (let key in obj) {
    newArray.push(key);
  }
  return newArray;
}

function getValues(obj) {
  let newArray = [];
  for (let value in obj) {
    newArray.push(obj[value]);
  }
  return newArray;
}

function showFormattedDate(dateObj) {
  const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let year = dateObj.getFullYear();
  let month = monthArray[dateObj.getMonth()];
  let day = dateObj.getDate();

  return `It's ${day} of ${month}, ${year} `;
}
