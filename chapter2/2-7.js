/**
 * 2.7
 * Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting
 * node. Note that the intersection is defined based on reference, not value. That is, if the kth
 * node of the first linked list is the exact same node (by reference) as the jth node of the second
 * linked list, then they are intersecting.
 **/
 
const {LinkedList, Node} = require('../lib/linkedlist');

function getLength(ll) {
	let length = 0;
	if (!ll.head) return length;
	let current = ll.head;
	while (current) {
		length++;
		current = current.next;
	}
	return length;
}


function intersect(ll1, ll2) {
	let length1 = getLength(ll1);
	let length2 = getLength(ll2);
	let difference = Math.abs(length1 - length2);
	let long;
	let short;
	if (length1  > length2) {
		long = ll1.head;
		short = ll2.head;
	} else {
		long = ll2.head;
		short = ll1.head;
	}
		
	
	while (difference) {
		long = long.next;
		difference--;
	}

	while (long) {
		if (long === short) {
			return short;
		} else {
			long = long.next;
			short = short.next;
		}
	}

	return false;
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;


let n6 = new Node(6);
let n7 = new Node(7);
let n8 = new Node(8);
n6.next = n7;
n7.next = n8;

let ll1 = new LinkedList();
ll1.insertHeadNode(n1);

let ll2 = new LinkedList();
ll2.insertHeadNode(n6);


console.log(intersect(ll1,ll2) === false);

n8.next = n1;

console.log(intersect(ll1,ll2) === n1);