/**
 * 3.5
 * Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use
 * an additional temporary stack, but you may not copy the elements into any other data structure
 * (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.
 */
 
const Stack = require('../lib/stack');

// function sortStack(stack) {
// 	let sorted = new Stack();
// 	sorted.push(stack.pop());

// 	while ( stack.peek() ) {
// 		let current = stack.pop();

// 		while ( sorted.peek() && sorted.peek() < current ) {
// 			stack.push(sorted.pop());
// 		}

// 		sorted.push(current);
// 	}

// 	return stack.data = [...sorted.data];
// }

let test = new Stack();

test.push(20);
test.push(30);
test.push(1);
test.push(10);
test.push(11);
sortStack(test);
console.log(test.data);
