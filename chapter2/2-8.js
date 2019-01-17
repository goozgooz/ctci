/**
 * 2.8
 * Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
 * beginning of the loop.
 */
 
 const {LinkedList, Node} = require('../lib/linkedlist');
 
 function isCircular(ll) {
   if (!ll.head) return false;
   
   let slow = ll.head;
   let fast = ll.head;
   
   while (fast.next && fast.next.next) {
     slow = slow.next;
     fast = fast.next.next;
     if (slow === fast) {
       return slow.next;
     }
   }
   
   return false;
 }
 
let ll = new LinkedList();
let a = new Node(1);
let b = new Node(2);
let c = new Node(3);
let d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

ll.insertHeadNode(a);

console.log(isCircular(ll) === false)

d.next = b;

console.log(isCircular(ll) === b)