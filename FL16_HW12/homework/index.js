function getAge(birthday) {
  const today = new Date();
  const birthYear = birthday.getFullYear();
  const birthMonth = birthday.getMonth();
  const birthDay = birthday.getDate();
  let age = today.getFullYear() - birthYear;

  if (today.getMonth() < birthMonth || today.getMonth() === birthMonth && today.getDate() < birthDay) {
    age--;
  }

  return age;
}

function getWeekDay(date) {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (date === Date.now()) {
    date = new Date();
  }

  return weekDays[date.getDay()];
}

function getAmountDaysToNewYear() {
  const newYear = new Date();
  const today = Date.now();
  const oneDay = 1000 * 60 * 60 * 24;
  const daysToNewYear = Math.trunc((newYear - today) / oneDay);
  return daysToNewYear;
}

function getProgrammersDay(year) {
  const isLeefYeer = year % 4 === 0 ? 12 : 13;
  const dayInYear = `${isLeefYeer}, Sep, ${year}`;
  const dayName = getWeekDay(new Date(dayInYear));

  return `${dayInYear} (${dayName})`;
}

function howFarIs(weekDay) {
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date().getDay();
  const capitalWeekDay = weekDay.charAt(0).toUpperCase() + weekDay.toLowerCase().slice(1);
  const disaredDay = weekDays.findIndex((day) => day === capitalWeekDay);
  const diff = disaredDay - today;

  if (diff) {
    return `It's ${diff} day(s) left till ${weekDays[disaredDay]} `;
  } else {
    return `Hey, today is ${weekDays[today]}`;
  }
}

function isValidIdentifier(string) {
  const expresion = /^\D(?=.*[A-Za-z])[^!@#$%^&*()][\w$_]*$/;

  if (expresion.test(string)) {
    return true;
  } else {
    return false;
  }
}

function capitalize(testStr) {
  return testStr
    .split(/ s*/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function isValidAudioFile(audioType) {
  const expresion = /(?=.*[A-Za-z])^[^!@#$%^&*()][A-Za-z]+[.aac|.mp3|.flac|.alac]*$/;
  if (expresion.test(audioType)) {
    return true;
  } else {
    return false;
  }
}

function getHexadecimalColors(testString) {
  return testString.match(/#([a-f0-9]{3}){1,2}\b/gi) || [];
}

function isValidPassword(pass) {
  const expresion = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;
  if (expresion.test(pass)) {
    return true;
  } else {
    return false;
  }
}

function addThousandsSeparators(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getAllUrlsFromText(text) {
  if (text) {
    return text.match(/((\w+:\/\/\S+)|(\w+[:]\w+\S+))[^\s,]/gi) || [];
  } else {
    return `(error)`;
  }
}
