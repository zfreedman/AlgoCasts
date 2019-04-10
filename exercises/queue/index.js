// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.storage = []
  }

  add(e) {
    this.storage.push(e)
  }

  remove() {
    return this.storage.shift()
  }
}

class Queue2 {
  constructor() {
    this.head = null
    this.tail = null
  }

  add(e) {
    let node = new Node(e)
    if (this.tail !== null) {
      this.tail.setPrev(node)
      node.setNext(this.tail)
    }
    this.tail = node
    if (this.head === null) {
      this.head = node
    }
  }

  remove() {
    let node = this.head
    if (this.head !== null) {
      this.head = node.prev
    } 
    if (this.tail === node) {
      this.tail = null
    }
    if (node === null) return undefined
    return node.getValue()
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
  getNext() { return this.next }
  setNext(node) {
    this.next = node
  }

  getPrev() { return this.prev }
  setPrev(node) {
    this.prev = node
  }

  getValue() { return this.value }
}

module.exports = Queue;
