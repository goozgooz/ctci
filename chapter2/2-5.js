/*
You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1’s digit is at the head of
the list. Write a function that adds the two numbers and returns the sum as a linked
list.
EXAMPLE
Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
Output: 8 -> 0 -> 8
*/

const {LinkedList, Node} = require('../lib/linkedlist');

function sumList(ll1, ll2) {
	let head = new LinkedList();
	let carry = 0;
	let node1 = ll1.head;
	let node2 = ll2.head;
	
	while (node1 || node2) {
		let x = node1 ? node1.data : 0;
		let y = node2 ? node2.data: 0;
		let sum = x + y + carry;
		if (sum > 9) {
			carry = 1;
			sum = sum - 10;
		}
		head.insert(sum);
		node1 = node1 ? node1.next : null;
		node2 = node2 ? node2.next : null;
	}
	if (carry) {
		head.insert(carry);
	}

	return head;
}

let list1 = new LinkedList();
list1.insert(1);
list1.insert(2);
list1.insert(3);

let list2 = new LinkedList();
list2.insert(4);
list2.insert(5);
list2.insert(6);

let result = sumList(list1, list2);

result.print(); // total is 975. print as 5,7,9