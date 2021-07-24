const getBigestNumber = require('../src/get-bigest-number');

describe('getBigestNumber', () => {
  it('should return bigest number', () => {
    expect(getBigestNumber(1, 2, 3, 4)).toBe(4);
  });

  it('throw Error if arguments length < 2', () => {
    const result = getBigestNumber(1);
    expect(() => result).toThrow(new Error('Not enough arguments'));
  });

  it('throw Error if arguments length > 10', () => {
    const result = getBigestNumber(1, 2, 3, 4, 5, 6, 7, 13, 21, 12, 321);
    expect(() => result).toThrow(new Error('Too many arguments'));
  });

  it('throw Error if type of any argument not a number', () => {
    const result = getBigestNumber(1, 2, 3, '5');
    expect(() => result).toThrow(new Error('Wrong argument type'));
  });
});
