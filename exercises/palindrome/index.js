// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome0(str) {
  return str === str.split('').reverse().join('')
}

function palindrome1(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false
  }
  return true
}

function palindrome2(str) {
  for (let i = Math.floor(str.length / 2); i >= 0; i--) {
    debugger
    if (str[i] !== str[str.length - 1 - i]) return false
  }
  return true
}

function palindrome3(str) {
  return str.split('').every((ch, i, arr) => ch === arr[arr.length - 1 - i])
}

function palindrome4(str) {
  return str.split('').every((ch, i, arr) => {
    debugger
    if (i >= arr.length / 2) {
      return arr.splice(0)
    }
    return ch === arr[arr.length - 1 - i]
  })
}
palindrome4('abcba')

module.exports = palindrome0;
module.exports = palindrome1;
module.exports = palindrome2;
module.exports = palindrome3;
module.exports = palindrome4;
