// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.clear()
  }

  clear() {
    this.head = null
  }

  forEach(cb) {
    let currNode = this.head
    while (currNode !== null) {
      cb(currNode)
      currNode = currNode.next
    }
  }

  getAt(i) {
    if (this.size() < i) return null

    let currNode = this.head
    let count = 0
    while (count < i) {
      currNode = currNode.next
      count++
    }
    return currNode
  }

  getFirst() { return this.head }

  getLast() {
    let currNode = this.head
    while (currNode.next !== null) currNode = currNode.next
    return currNode
  }

  insertAt(e, i) {
    let size = this.size()
    if (size === 0 || i === 0) return this.insertFirst(e)
    if (size <= i) return this.insertLast(e)

    let node = new Node(e, null)

    let currNode = this.head
    while (currNode !== null && i > 1) {
      currNode = currNode.next
      i -= 1
    }

    let currNodeNext = currNode.next
    currNode.next = node
    node.next = currNodeNext
  }

  insertFirst(e) {
    const node = new Node(e, null)
    const prevHead = this.head
    this.head = node
    node.next = prevHead
  }

  insertLast(e) {
    const node = new Node(e, null)

    // no head
    if (this.head === null) return this.head = node

    let currNode = this.head
    while (currNode.next !== null) currNode = currNode.next
    currNode.next = node
  }

  removeAt(i) {
    const size = this.size()
    if (size < i) return

    if (i === 0) return this.removeFirst()
    if (size === i) return this.removeLast()

    let currNode = this.head
    while (i > 1) {
      currNode = currNode.next
      i -= 1
    }
    let nextNext = currNode.next.next
    currNode.next = nextNext
  }

  removeFirst() {
    if (this.head !== null) {
      this.head = this.head.next
    }
  }

  removeLast() {
    if (this.size() < 2) return this.head = null

    let currNode = this.head
    while (currNode.next !== null && currNode.next.next !== null) currNode = currNode.next
    currNode.next = null
  }

  size() {
    let count = 0
    let currNode = this.head
    while (currNode !== null) {
      currNode = currNode.next
      count++
    }
    return count
  }
}

module.exports = { Node, LinkedList };
