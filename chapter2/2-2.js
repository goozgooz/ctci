/**
 * 2.2
 * Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
**/

const {LinkedList, Node} = require('../lib/linkedlist');

function removeKth(ll, k) {
  if (!ll.head) return;
  
  let previous = null;
  let slow = ll.head;
  let fast = ll.head;
  
  for (let i = 1; i <= k; i++) {
    if (fast.next) {
      fast = fast.next;
    } else {
      return console.log('k is out of bounds');
    }
  }
  
  while (fast) {
    if (!fast.next) {
      if (!previous) {
        return ll.head = ll.head.next;
      } else {
        return previous.next = slow.next;
      }
    } else {
      previous = slow;
      slow = slow.next;
      fast = fast.next;
    }
  }
}

const ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
removeKth(ll, 3);
ll.print();