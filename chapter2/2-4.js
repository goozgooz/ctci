/**
 * 2.4
 * Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
 * before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need
 * to be after the elements less than x (see below). The partition element x can appear anywhere in the
 * "right partition"; it does not need to appear between the left and right partitions.
 * EXAMPLE
 * Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5)
 * Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
*/

const {LinkedList, Node} = require('../lib/linkedlist');

// LinkedList.prototype.partition = function(x) {
//   if (!this.head) return null;
  
//   let leftHead = null;
//   let left = null;
//   let rightHead = null;
//   let right = null;
  
//   let current = this.head;
//   while (current) {
//     if (current.data < x) {
//       if (!leftHead) {
//         leftHead = current;
//         left = leftHead;
//       } else {
//         left.next = current; 
//         left = left.next;
//       }
//     } else {
//       if (!rightHead) {
//         rightHead = current;
//         right = rightHead;
//       } else {
//         right.next = current;
//         right = right.next;
//       }
//     }
//     current = current.next;
//   }
//   left.next = rightHead;
//   right.next = null;
  
//   return leftHead;
// }

let ll = new LinkedList();
ll.insert(5);
ll.insert(65);
ll.insert(15);
ll.insert(75);
ll.insert(25);
ll.insert(86);
ll.insert(35);
ll.insert(95);
ll.insert(45);
ll.insert(105);
ll.print();

console.log('-----');
ll.partition(50)
ll.print();