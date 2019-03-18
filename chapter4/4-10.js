/**
 * 4.10
 * Check Subtree: Tl and T2 are two very large binary trees, with Tl much bigger than T2. Create an
 * algorithm to determine if T2 is a subtree of Tl.
 * A tree T2 is a subtree of T1 if there exists a node n in Tl such that the subtree of n is identical to T2 .
 * That is, if you cut off the tree at node n, the two trees would be identical.

 */
 
 // https://www.youtube.com/watch?v=npetHinL22Q

const BST = require('../lib/bst');

// function isSubtree(node1, node2) {
// 	if (!node2) return true;
// 	if (!node1) return false;

// 	if (areIdentical(node1, node2)) {
// 		return true;
// 	}

// 	return isSubtree(node1.left, node2) || isSubtree(node1.right, node2);
// }

// function areIdentical(node1, node2) {
// 	if (!node1 && !node2) return true;
// 	if (!node1 || !node2) return false;
// 	return node1.data === node2.data && areIdentical(node1.left, node2.left) && areIdentical(node1.right, node2.right);
// }

let tree1 = new BST(50);
tree1.insert(80);
tree1.insert(30);
tree1.insert(75);
tree1.insert(70);
tree1.insert(100);
tree1.insert(40);
tree1.insert(35);

let tree2 = new BST(75);
tree2.insert(70);

let tree3 = new BST(30);
tree3.insert(69);

console.log(isSubtree(tree1, tree2) === true);
console.log(isSubtree(tree1, tree3) === false);
