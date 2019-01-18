/**
 * 3.4
 * Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.
 * In this question, I'v used javascript arrays and dealt with them as stacks
*/

const Stack = require('../lib/stack');

class MyQueue {
  constructor() {
    this.data = new Stack();
    this.holder = new Stack();
  }
  
  q(data) {
    this.data.push(data);
  }
  
  dq() {
    while (this.data.peek()) {
      this.holder.push(this.data.pop());
    }
    
    let deleted = this.holder.pop();
    
    while (this.holder.peek()) {
      this.data.push(this.holder.pop());
    }
    
    return deleted;
  }
}

let test = new MyQueue();
test.q(1);
test.q(2);
test.q(3);
console.log(test);
console.log(test.dq() === 1);
console.log(test.dq() === 2);
console.log(test.dq() === 3);
