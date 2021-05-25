function getAge(birthday) {
  const today = new Date();
  const birthYear = birthday.getFullYear();
  const birthMonth = birthday.getMonth();
  const birthDay = birthday.getDate();
  let age = today.getFullYear() - birthYear;

  if (today.getMonth() < birthMonth || (today.getMonth() === birthMonth && today.getDate() < birthDay)) {
    age--;
  }

  return age;
}
console.log(getAge(new Date(2000, 4, 24)));

function getWeekDay(date) {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (date === Date.now()) {
    date = new Date(Date.now());
  }

  const dayNumber = date.getDay();
  let dayName;

  weekDays.forEach((day, index) => {
    if (dayNumber === index) {
      dayName = day;
    }
  });

  return dayName;
}

console.log(getWeekDay(new Date(2020, 5, 12)));
console.log(getWeekDay(Date.now()));

//3
function getAmountDaysToNewYear() {
  const newYear = new Date(2022, 0, 1);
  const today = Date.now();
  const oneDay = 1000 * 60 * 60 * 24;
  const daysToNewYear = Math.trunc((newYear - today) / oneDay);
  return daysToNewYear;
}
console.log(getAmountDaysToNewYear());

function isValidIdentifier(string) {
  const regExp = /^\D\.*/;
  if (regExp.test(string)) {
    return true;
  } else {
    return false;
  }
}
console.log(isValidIdentifier('myVar!')); // false
console.log(isValidIdentifier('myVar$')); // true
console.log(isValidIdentifier('myVar_1')); // true
console.log(isValidIdentifier('1_myVar')); // false
