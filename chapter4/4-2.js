/**
 * 4.2
 * Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an
 * algorithm to create a binary search tree with minimal height.
*/

const BST = require('../lib/bst');

// function takes array, start, end
// if start > end  retrun null - base
// find middle array item. make that BST
// make the left node of that a call to same function with start -> middle - 1
// right is middle + 1 to end

// function createBST(arr, start = 0, end = arr.length-1) {
//   if (start > end) return;

//   let middle = Math.floor((start + end) / 2);

//   let root = new BST(arr[middle]);
//   root.left = createBST(arr, start, middle-1);
//   root.right = createBST(arr, middle+1, end);

//   return root;
// }


console.log(createBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));