/**
 * 2.7
 * Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting
 * node. Note that the intersection is defined based on reference, not value. That is, if the kth
 * node of the first linked list is the exact same node (by reference) as the jth node of the second
 * linked list, then they are intersecting.
 **/
 
const {LinkedList, Node} = require('../lib/linkedlist');

LinkedList.prototype.insertNode = function(node) {
  return this.head = node;
};

function intersect(ll1, ll2) {
  if (!ll1.head || !ll2.head) return false;
  let nodes1 = [];
  let nodes2 = [];
  
  let current1 = ll1.head;
  let current2 = ll2.head;
  
  while (current1 || current2) {
    if (current1) {
      nodes1.push(current1); 
      if (nodes1.indexOf(current2) > -1) {
        return current2;
      } else {
        current1 = current1.next;
      }
    }
    
    if (current2) {
      nodes2.push(current2);
      if (nodes2.indexOf(current1) > -1) {
        return current1;
      } else {
        current2 = current2.next;
      }
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
ll1.insertNode(n1);

let ll2 = new LinkedList();
ll2.insertNode(n6);


console.log(intersect(ll1,ll2) === false);

n8.next = n1;

console.log('node returned', intersect(ll1,ll2));