// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let depths = []
  let nodeData = [{node: root, depth: 0}]
  while (nodeData.length > 0) {
    const { depth, node } = nodeData.pop()
    if (depths[depth] === undefined) depths[depth] = 0
    depths[depth]++

    node.children.forEach(c => nodeData.push({ node: c, depth: depth + 1}))
  }

  return depths
}

module.exports = levelWidth;
