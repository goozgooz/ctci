class BST {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	insert(data) {
		let subtree = data < this.data ? 'left' : 'right';
		if (this[subtree]) {
			return this[subtree].insert(data);
		} else {
			return this[subtree] = new BST(data);
		}
	}

	inOrder() {
		if (this.left) this.left.inOrder();
		if (this.data) console.log(this.data);
		if (this.right) this.right.inOrder();
	}

	preOrder() {
		if (this.data) console.log(this.data);
		if (this.left) this.left.preOrder();
		if (this.right) this.right.preOrder();
	}

	postOrder() {
		if (this.left) this.left.postOrder();
		if (this.right) this.right.postOrder();
		if (this.data) console.log(this.data);
	}

	bfs() {
		let q = [this];
		while (q.length) {
			let current = q.shift();
			if (current.left) q.push(current.left);
			if (current.right) q.push(current.right);
			console.log(current.data);
		}
	}

	dfs() {
		let stack = [this];
		while (stack.length) {
			let current = stack.pop();	
			if (current.left) stack.push(current.left);
			if (current.right) stack.push(current.right);
			console.log(current.data);
		}
	}
}

module.exports = BST;