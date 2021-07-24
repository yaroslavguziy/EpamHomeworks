function getBigestNumber(...arguments) {
  arguments.forEach( (arg) => {
    if (typeof arg !== 'number') {
      throw Error('Wrong argument type') ;
    }
  })

  if (arguments.length > 10) {
    throw Error('Too many arguments') ;
  } else if (arguments.length < 2) {
    throw Error('Not enough arguments') ;
  }

  return Math.max(...arguments)
} 

module.exports = getBigestNumber;

