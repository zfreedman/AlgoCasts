// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const set = new Set([
  'a', 'e', 'i', 'o', 'u'
])
function vowels(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i].toLowerCase())) count++
  }
  return count
}

const vowels2 = str => {
  let count = 0
  for (let ch of str) {
    if (set.has(ch.toLowerCase())) count++
  }
  return count
}

const vowels3 = str => str
  .split('')
  .reduce((acc, curr) => set.has(curr.toLowerCase()) ? acc + 1 : acc, 0)

module.exports = vowels3;
