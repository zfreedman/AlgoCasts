// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams1(stringA, stringB) {
  const sortedString = string => string.toLowerCase().replace(/[.\-?! ]/g, '').split('').sort().join('')
  return sortedString(stringA) === sortedString(stringB)
}

function anagrams2(a, b) {
  // first create hash tables for a and b's letters (lowercase)
  let counterA = makeHashFromstring(a)
  let counterB = makeHashFromstring(b)

  // compare the kvps of each hash table. if the sizes of the HT are different
  // OR if a single value mismatches OR if 1 key is present in one hash but
  // not the other, we knowthese 2 strings are not anagrams
  
  // size mismatch
  if (Object.keys(counterA).length !== Object.keys(counterB).length) {
    return false
  }

  // key-by-key comparison
  for (let ch in counterA) {
    if (!(ch in counterB) || counterA[ch] !== counterB[ch]) return false
  }

  return true
}
const makeHashFromstring = string => {
  const counter = {}
  for (let ch of string) {
    ch = ch.toLowerCase()
    if (!'.?!- '.includes(ch)) {
      ch in counter ? counter[ch]++ : counter[ch] = 0
    }
  }
  return counter
}

module.exports = anagrams2;
