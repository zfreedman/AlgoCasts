// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt0(n) {
  const multiplier = n >= 0 ? 1 : -1
  const reverseAsString = String(n).split('').reverse().join('')
  let result = multiplier >= 0 ? reverseAsString : reverseAsString.slice(0, -1) 
  return +result * multiplier
}

function reverseInt1(n) {
  return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''))
}

module.exports = reverseInt1;
