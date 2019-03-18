const {LinkedList} = require('../lib/linkedlist');

// LinkedList.prototype.reverse = function() {
// 	if (!this.head) return;
// 	let current = this.head;
// 	let previous = null;
// 	let next = current.next;
// 	while (current) {
// 		next = current.next;
// 		current.next = previous;
// 		previous = current;
// 		current = next;
// 	}

// 	return this.head = previous;
// }

// function reverse(ll) {
// 	if (!ll.head) return;
// 	let previous = null;
// 	let current = ll.head;
// 	let next = current.next;
// 	while (current) {
// 		let next = current.next;
// 		current.next = previous;
// 		previous = current;
// 		current = next;
// 	}
// 	return ll.head = previous;
// }

let test = new LinkedList();
test.insert(1);
test.insert(2);
test.insert(3);
reverse(test)
// test.reverse();
test.print();