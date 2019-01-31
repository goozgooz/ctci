class Node {
	constructor(data) {
		this.data = data;
		this.previous = null;
		this.next = null;
	}
}

class DLL {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	insertFirst(data) {
		let newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.previous = newNode;
			this.head = newNode;
		}
	}			

	insertLast(data) {
		let newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.previous = this.tail;
			this.tail = newNode;
		}
	}

	remove(data) {
		if (!this.head) return;
		let current = this.head;
		
		while (current) {
			if (current.data === data) {
				if (this.head === this.tail) {
					this.head = null;
					this.tail = null;
				} else if (current === this.head) {
					this.head = this.head.next;
					this.head.previous = null;
				} else if (current === this.tail) {
					this.tail = this.tail.previous;
					this.tail.next = null;
				} else {
					current.previous.next = current.next;
					current.next.previous = current.previous;
				}
				return;
			}
			current = current.next;
		}

		return console.log(data, 'isnt in the list');
	}

	insertAfter(targetData, data) {
		if (!this.head) return;
		let newNode = new Node(data);
		
		let current = this.head;

		while (current) {
			if (current.data === targetData) {
				if (current === this.tail) {
					current.next = newNode;
					newNode.previous = current;
					this.tail = newNode;
					return;
				}
				current.next.previous = newNode;
				newNode.next = current.next;
				newNode.previous = current;
				current.next = newNode;
				return;
			}

		current = current.next;
	}

	return console.log('that data does not exist in the list');
}
	

	print(){
		let current = this.head;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}
}

let test = new DLL();
test.insertFirst(3);
test.remove(3);
console.log( 'head and tail should be null:\n', test);
console.log('\nprint 1-5');
test.insertFirst(3);
test.insertFirst(2);
test.insertFirst(1);
test.insertLast(4);
test.insertLast(5);
test.print();

console.log('\ntesting remove');
test.remove(2);
test.print();

console.log('\ntesting insert after');
test.insertAfter(1,69);
test.insertAfter(5,69);
test.print();
