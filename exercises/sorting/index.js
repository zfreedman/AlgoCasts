// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const tmp = arr[j]
        arr[j] = arr[i]
        arr[i] = tmp
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j
    }

    if (minIndex !== i) {
      const tmp = arr[minIndex]
      arr[minIndex] = arr[i]
      arr[i] = tmp
    }
  }
  return arr
}
/*
arr = [5,2,4,3]
i = 0
minIndex = 1
j = 3

tmp = 2
arr[minIndex] = 
*/


function mergeSort(arr) {
  if (arr.length === 1) return arr
  // return merge(arr.slice(0, arr.length / 2), arr.slice(arr.length / 2))
  return mergeInPlace(arr.slice(0, arr.length / 2), arr.slice(arr.length / 2))
}

function merge(left, right) {
  let sortedLeft = left
  if (left.length > 1) sortedLeft = mergeSort(left)
  let leftPointer = 0

  let sortedRight = right
  if (right.length > 1) sortedRight = mergeSort(right)
  let rightPointer = 0

  let result = []
  while (leftPointer < left.length || rightPointer < right.length) {
    if (rightPointer === right.length) result.push(sortedLeft[leftPointer++])
    else if (leftPointer === left.length) result.push(sortedRight[rightPointer++])
    else result.push(sortedLeft[leftPointer] < sortedRight[rightPointer]
      ? sortedLeft[leftPointer++]
      : sortedRight[rightPointer++]
    )
  }

  return result
}

function mergeInPlace(left, right) {
  let sortedLeft = left
  if (left.length > 1) sortedLeft = mergeSort(left)

  let sortedRight = right
  if (right.length > 1) sortedRight = mergeSort(right)

  let result = []
  while (sortedLeft.length && sortedRight.length) {
    result.push(sortedLeft[0] < sortedRight[0] ? sortedLeft.shift() : sortedRight.shift())
  }

  return [...result, ...sortedLeft, ...sortedRight]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
