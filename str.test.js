const myModule = require('./script.js');
const stringLength = myModule.stringLength;
const reverseString = myModule.reverseString;
const add = myModule.add;
const subtract = myModule.subtract;
const multiply = myModule.multiply;
const devide = myModule.devide;
const capitalizeString = myModule.capitalizeString;

describe (('my string'), () => {
  test('hello length is equal (5)', () => {
    expect(stringLength('hello')).toBe(5);
  });
  test('string length no more than 10', () => {
    expect(stringLength('hello microverse')).toBe('string length must not exceed 10 characters');
  });
  test('string must not empty', () => {  
    expect(stringLength('')).toBe('empty string');
  });
  test('hello reverse (olleh)', () => {  
    expect(reverseString('hello')).toBe('olleh');
  });
  test('first letter is capital', () => {  
    expect(capitalizeString('hello')).toBe('Hello');
  });

});

describe (('my calc'), () => {
  test('2 + 1 equal (3)', () => {
    expect(add(2,1)).toBe(3);
  });
  test('2 - 1 equal (1)', () => {
    expect(subtract(2,1)).toBe(1);
  });
  test('2 X 3 equal (6)', () => {
    expect(multiply(2,3)).toBe(6);
  });
  test('8 / 4 equal (2)', () => {
    expect(devide(8,4)).toBe(2);
  });
});