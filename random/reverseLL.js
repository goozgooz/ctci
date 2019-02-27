const {LinkedList} = require('../lib/linkedlist');

LinkedList.prototype.reverse = function() {
  if (!this.head) return;
	let prev = null;
	let current = this.head;
	while (current) {
		let temp = current.next;
		current.next = prev;
		prev = current;
		current = temp;
	}
	return this.head = prev;
}

let test = new LinkedList();
test.insert(1);
test.insert(2);
test.insert(3);
test.reverse();
test.print();