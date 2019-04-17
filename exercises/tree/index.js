// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    const childIndex = this.children.findIndex(e => e.data === data)
    if (childIndex !== -1) this.children.splice(childIndex, 1)
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(cb) {
    if (this.root === null) return

    let nodes = [this.root]
    while (nodes.length > 0) {
      const currNode = nodes.shift()
      cb(currNode)
      currNode.children.forEach(child => nodes.push(child))
    }
  }

  traverseDF(cb) {
    if (this.root === null) return

    const recurse = node => {
      cb(node)
      node.children.forEach(recurse)
    }

    recurse(this.root)
  }
}

module.exports = { Tree, Node };
