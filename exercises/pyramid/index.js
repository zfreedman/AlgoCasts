// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  for (let i = 0; i < n; i++) {
    let middleSize = 1 + 2 * i
    let middle = '#'.repeat(middleSize)
    let side = ' '.repeat((2 * n - 1 - middleSize) / 2)
    console.log(side + middle + side)
  }
  /*
    n = 3
    i = 2
    middleSize = 5
    middle = '#####'
    side = ' '.repeat((5 - 5) / 2) = ''
    ----------------
    '  #  '
    ' ### '
    '#####'

  */
}

const pyramid2 = n => {
  [...Array(n)].forEach((e, i) => {
    let middleSize = 1 + 2 * i
    let middle = '#'.repeat(middleSize)
    let side = ' '.repeat((2 * n - 1 - middleSize) / 2)
    console.log(side + middle + side)
  })
}

const pyramid3 = n => {
  const doRecursion = (str, i = 0) => {
    let diff = (2 * n - 1 - str.length) / 2
    let result = ' '.repeat(diff) + str + ' '.repeat(diff)
    console.log(result)
    ++i
    if (str.length < 2 * n - 1) doRecursion('#'.repeat(2 * i + 1), i)
  }

  doRecursion('#')
}

module.exports = pyramid3;

/*
str = '###'
i = 1
diff = (5 - 3) / 2
result = ' ### '

-------------
'  #  '
' ### '
*/