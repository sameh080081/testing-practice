function stringLength(str) {
  if(str === '') {return 'empty string';}
  if(str.length > 10) {return 'string length must not exceed 10 characters'}
  return str.length;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function capitalizeString(str) {
  return str.charAt(0).toUpperCase()+str.substring(1,str.length);
}

//calc section
function add(a,b) {
  return a+b;
}
function subtract(a,b) {
  return a-b;
}
function multiply(a,b) {
  return a*b;
}
function devide(a,b) {
  return a/b;
}

module.exports = { stringLength,reverseString,add,subtract,multiply,devide,capitalizeString};