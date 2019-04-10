// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.inOrder = new Stack()
    this.reverse = new Stack()
  }

  add(e) {
    while (this.inOrder.peek() !== undefined) {
      this.reverse.push(this.inOrder.pop())
    }

    this.inOrder.push(e)
    while (this.reverse.peek() !== undefined) {
      this.inOrder.push(this.reverse.pop())
    }
  }

  remove() {
    return this.inOrder.pop()
  }
  
  peek() {
    return this.inOrder.peek()
  }
}

module.exports = Queue;
