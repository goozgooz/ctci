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
  if (!ll1.head || !ll2.head) return;
  let number1 = '';
  let number2 = '';
  
  let current1 = ll1.head;
  let current2 = ll2.head;
  while (current1 || current2) {
    if (current1) {
      number1 = current1.data + number1;
      current1 = current1.next;
    }
    
    if (current2) {
      number2 = current2.data + number2;
      current2 = current2.next;
    }
  }
  
  
  
  let sum = parseInt(number1) + parseInt(number2);
  let reversed = sum.toString().split('').reverse();
  let newList = new LinkedList();
  for (let num of reversed) {
    newList.insert(num);
  }
  return newList;
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