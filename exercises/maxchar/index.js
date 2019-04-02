// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charHash = str.split('').reduce((acc, curr) => {
    acc[curr] === undefined ? acc[curr] = 1 : acc[curr]++
    return acc
  }, {})

  const mostFrequent = Object.entries(charHash).reduce((acc, curr) => {
    return acc[1] < curr[1] ? curr : acc
  })[0]

  return mostFrequent[0]
}

function maxChar1(str) {
  const charHash = {}
  let maxCount = 0
  let maxChar = ''
  for (let char of str) {
    charHash[char] = char in charHash ? charHash[char] + 1 : 1
    if (maxCount < charHash[char]) {
      maxChar = char
      maxCount = charHash[char]
    }
  }

  return maxChar
}

module.exports = maxChar1;
