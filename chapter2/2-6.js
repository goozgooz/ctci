/* 2.6
 Palindrome: Implement a function to check if a linked list is a palindrome.
*/

const {LinkedList, Node} = require('../lib/linkedlist');

function isPalindrome(ll) {
  if (!ll.head) return true;
  
  let stack = [];
  let current = ll.head;
  while (current) {
    stack.push(current.data);
    current = current.next;
  }
  
  current = ll.head;
  
  while (current) {
    if (current.data !== stack.pop()) {
      return false;
    } else {
      current = current.next;
    }
  }
  return true;
}


let ll1 = new LinkedList();
ll1.insert(1);
ll1.insert(2);
ll1.insert(3);
ll1.insert(4);
ll1.insert(3);
ll1.insert(2);
ll1.insert(1);
console.log(isPalindrome(ll1) === true);

let ll2 = new LinkedList();
ll2.insert(5);
ll2.insert(6);
ll2.insert(7);
ll2.insert(6);
console.log(isPalindrome(ll2) === false)