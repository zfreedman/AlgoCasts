// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 1; i <= n; i++) console.log('#'.repeat(i) + ' '.repeat(n - i))
}

const steps2 = n => [ ...Array(n)].forEach((e, i) => console.log('#'.repeat(i + 1).padEnd(n, ' ')))

module.exports = steps2;
