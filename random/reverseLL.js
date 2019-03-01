const {LinkedList} = require('../lib/linkedlist');

LinkedList.prototype.reverse = function() {
	if (!this.head) return;
	let current = this.head;
	let previous = null;
	let next = current.next;
	while (current) {
		next = current.next;
		current.next = previous;
		previous = current;
		current = next;
	}

	return this.head = previous;
}

let test = new LinkedList();
test.insert(1);
test.insert(2);
test.insert(3);
test.reverse();
test.print();