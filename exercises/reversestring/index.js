// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse('').join('')
}

function reverseLoop(str) {
  let result = ''
  for (let i = str.length - 1; i >= 0; i--) result += str[i];
  return result;
}

function reverseLoopModern(str) {
  let result = ''
  for (let ch of str)
    result = ch + result
  return result
}

function reverseArrHelper(str) {
  return str.split('').reduce((acc, curr) => curr + acc, '')
}

// module.exports = reverse;
// module.exports = reverseLoop;
// module.exports = reverseLoopModern;
module.exports = reverseArrHelper;
