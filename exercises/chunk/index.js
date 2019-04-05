// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // arr = [1,2,3,4]
  // size = 2
  // result = [[1, 2], [3, 4]]
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (i % size === 0) {
      result.push([])
    }
    result[result.length - 1].push(array[i])
  }
  return result
}

function chunk1(array, size) {
  return array.reduce((acc, curr, i) => {
    // add on a new subarray when the current one is filled
    if (i % size === 0) acc.push([])
    // always elements onto the last sub array
    acc[acc.length - 1].push(curr)
    return acc
  }, [])
}

module.exports = chunk1;
