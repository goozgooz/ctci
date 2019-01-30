const BST = require('../lib/bst');

function validate(node, min = null, max = null) {
	if (min !== null && node.data < min) return false;
	if (max !== null && node.data > max) return false;
	if (node.left && !validate(node.left, min, node.data)) return false;
	if (node.right && !validate(node.right, node.data, max)) return false;
	return true;
}

const n = new BST(10);
n.insert(5);
n.insert(15);
n.insert(0);
n.insert(20);
console.log(validate(n) === true);
n.left.left.right = new BST(999);
console.log(validate(n) === false);