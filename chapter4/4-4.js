/**
 * 4.4
 * Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of
 * this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
 * node never differ by more than one.
*/

const BST = require('../lib/bst');

// maxDepth and minDepth are O(n) - so calling them both is still O(n);
// run time is O(n) - space complexity is linear O(1)

// function minDepth(bst) {
//   if (!bst) return 0;
//   return 1 + Math.min(minDepth(bst.left), minDepth(bst.right));
// }

// function maxDepth(bst) {
//   if (!bst) return 0;
//   return 1 + Math.max(maxDepth(bst.left), maxDepth(bst.right));
// }

// function isBalanced(bst) {
//   if (!bst) return true;
//   return maxDepth(bst) - minDepth(bst) <= 1;
// }

let test = new BST(50);
test.insert(25);
test.insert(15);
test.insert(30);
console.log(isBalanced(test) === false);
test.insert(75);
console.log(isBalanced(test) === true);