/**
 * 4.3
 * List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes
 * at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).
**/

const {LinkedList} = require('../lib/linkedlist');

const BST = require('../lib/bst');

function listOfDepths(bst) {
	if (!bst.data) return null;
	let lists = [new LinkedList()];
	let q = [bst, 'end'];
	
	while (q.length > 1) {
		let current = q.shift();
		if (current === 'end') {
			lists.unshift(new LinkedList());
			q.push(current);
		} else {
			lists[0].insert(current);
			if (current.left) q.push(current.left);
			if (current.right) q.push(current.right);
		}
	}

	return lists;
}

let bst = new BST(50);
bst.insert(40);
bst.insert(60);
bst.insert(30);
bst.insert(70);

let lists = (listOfDepths(bst));
listOfDepths(bst);
for(let list of lists){
	list.print();
	console.log('------------')
}
