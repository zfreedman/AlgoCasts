// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push([])
  }

  let x = 0
  let y = 0
  let dirX = 0
  let dirY = 1
  let count = 1
  while (count <= n**2) {
    arr[x][y] = count

    if (dirY !== 0 && (y === n - 1 && dirY > 0 || y === 0 && dirY < 0 || arr[x][y + dirY] !== undefined)) {
      dirX = dirY
      dirY = 0
    }
    else if (dirX !== 0 && (x === n - 1 && dirX > 0 || x === 0 && dirX < 0 || arr[x + dirX][y] !== undefined)) {
      dirY = -dirX
      dirX = 0
    }
    x += dirX
    y += dirY

    count += 1
  }

  return arr
}

function printMatrix(m) {
  for (let i = 0; i < m.length; i++) {
    console.log(m[i])
  }
}

module.exports = matrix;
