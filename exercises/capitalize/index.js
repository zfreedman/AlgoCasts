// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str.split(' ').map(s => s[0].toUpperCase() + s.slice(1)).join(' ')
}

const capitalize2 = str => {
  let result = ''
  let lastChar = ' '
  for (let ch of str) {
    result += lastChar === ' ' ? ch.toUpperCase() : ch
    lastChar = ch
  }
  return result
}

module.exports = capitalize2;
