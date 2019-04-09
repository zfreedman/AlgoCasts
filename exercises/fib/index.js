// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let fibs = [0, 1]
  for (let i = 2; i <= n; i++) {
    fibs.push(fibs[i-1] + fibs[i-2])
  }
  return fibs[fibs.length - 1]
}

function fibR(n) {
  if (n < 2) return n
  return fibR(n -1) + fibR(n - 2)
}

module.exports = fibR;
