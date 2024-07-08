// Create a Binary Tree structure using the image below. In your program, ask the user to enter a word then output the number of occurrences of the word to the user. If the word does not exist in the binary tree, then output a message saying the word does not exist and ask the user to enter another word.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  countOccurrences(word) {
    let count = 0;
    function traverse(node) {
      if (node === null) return;
      if (node.value === word) count++;
      traverse(node.left);
      traverse(node.right);
    }
    traverse(this.root);
    return count;
  }
}

const tree = new BinaryTree();
// Insert words into the tree (example)
tree.insert("map");
tree.insert("apple");
tree.insert("map");
tree.insert("banana");
tree.insert("map");

const word = prompt("Enter a word to check its occurrence: ");
const count = tree.countOccurrences(word);
if (count > 0) {
  console.log(`The word ${word} appears ${count} times.`);
} else {
  console.log(`The word ${word} does not exist.`);
}
