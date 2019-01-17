/**
 * 2.1
 * Remove Dups: Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP
 * How would you solve this problem if a temporary buffer is not allowed?
 */
 
const {LinkedList, Node} = require('../lib/linkedlist');

LinkedList.prototype.removeDupes = function() {
  if (!this.head) return null;
  
  let nodes = {};
  let previous = null;
  let current = this.head;
  
  while (current) {
    if (nodes[current.data]) {
      previous.next = current.next;
    } else {
      nodes[current.data] = true;
      previous = current;
    }
    current = current.next;
  }
  return this;
}

const ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(2);
ll.insert(2);
ll.insert(1);
ll.removeDupes();
ll.print();