// O(logn) / O(H)
// if not given reference to actual node -> use find() function to find the node
// with the node found or given to you -> if right subtree call getMin()
// if not right subtree - walk from root down to your node - and as you go - kepe track of the successor

// https://www.youtube.com/watch?v=5cPbNCrdotA

/**
 * 4.6
 * Successor: Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a
 * binary search tree. You may assume that each node has a link to its parent.
*/

// NO LINK TO PARENT NODE

const BST = require('../lib/bst');

// RunTime O(h) - height of the tree

// function findNode(bst, data) {
//   if (bst.data === data) return bst;
//   let subtree = data < bst.data ? 'left' : 'right';
//   if (bst[subtree]) {
//     return findNode(bst[subtree], data);
//   } else {
//     return null;
//   }
// }

// function getSuccessor(bst, data) {
//   let node = findNode(bst,data);
//   if (!node) return null;
  
//   if (node.right) {
//     let min = node.right;
//     while (min.left) {
//       min = min.left;
//     }
//     return min;
//   } else {
//     let successor = null;
//     let current = bst;
//     while (current !== node) {
//       if (node.data < current.data) {
//         successor = current;
//         current = current.left;
//       } else {
//         current = current.right;
//       }
//     }
//     return successor;
//   }
// }


let test = new BST(50);
test.insert(60);
test.insert(30);
test.insert(35);
test.insert(25);
test.insert(80);
test.insert(55);
test.insert(58);
test.insert(56);
test.insert(84);
test.insert(53);
test.insert(33);
console.log(getSuccessor(test, 25).data === 30);
console.log(getSuccessor(test, 10) === null);
console.log(getSuccessor(test, 30).data === 33);
console.log(getSuccessor(test, 60).data === 80);
console.log(getSuccessor(test, 84) === null);
console.log(getSuccessor(test, 1) === null);
