const pipe = (value, ...funcs) => {
  let position;
  try {
    funcs.forEach((fn, index) => {
      position = index;
      value = fn(value);
    });
  } catch (e) {
    value = ` Provided argument at position ${position} is not a function!`;
  }
  return value;
};

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
const capitalize = (value) =>
  value
    .split(' ')
    .map((val) => val.charAt(0).toUpperCase() + val.slice(1))
    .join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;

const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

alert(error); // Provided argument at position 2 is not a function!

const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

alert(result); // Hello, John Doe!
