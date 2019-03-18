const BST = require('../lib/bst');

// function lca(root, node1, node2) {
// 	if (!root) return null;
// 	let current = root;
// 	while (current) {
// 		if (current.data > node1 && current.data > node2) {
// 			current = current.left;
// 		} else if (current.data < node1 && current.data < node2) {
// 			current = current.right;
// 		} else {
// 			return current;
// 		}
// 	}
// }
// function lca(bst, node1, node2) {
// 	if (!bst) return null;
// 	if (bst.data > node1 && bst.data > node2) {
// 		return lca(bst.left, node1, node2);
// 	} 

// 	if (bst.data < node2 && bst.data < node1) {
// 		return lca(bst.right, node1, node2);
// 	}

// 	return bst;
// }
function lca(bst, node1, node2) {
	if (!bst) return null;
	if (bst.data > node1 && bst.data > node2) {
		return lca(bst.left, node1,node2);
	} 
	if (bst.data < node1 && bst.data < node2) {
		return lca(bst.right, node1, node2);
	}

	return bst;
}

let test = new BST(30);
test.insert(15);
test.insert(10);
test.insert(5);
test.insert(18);
test.insert(14);
test.insert(20);
test.insert(40);
test.insert(35);
test.insert(60);
console.log(lca(test, 6, 60).data === 30);
console.log(lca(test, 10, 18).data === 15);
console.log(lca(test, 35, 40).data === 40);