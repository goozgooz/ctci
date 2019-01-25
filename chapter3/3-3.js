/**
 * 3.3
 * Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack exceeds some
 * threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be
 * composed of several stacks and should create a new stack once the previous one exceeds capacity.
 * SetOfStacks. push () and SetOfStacks. pop () should behave identically to a single stack
 * (that is, pop ( ) should return the same values as it would if there were just a single stack).
 * FOLLOW UP
 * Implement a function popAt (int index) which performs a pop operation on a specific sub-stack.
*/

const Stack = require('../lib/stack');

// array of stacks
// limit is passed to construcotr
// current height
// get last stack - push to it - height++
//    if current height === limit -> initiliazie new stack at end. set height to 0
// get last stack - pop item off - height-- : if 

class SetOfStacks {
  constructor(limit) {
    this.stacks = [new Stack()];
    this.limit = limit;
    this.currentHeight = 0;
  }
  
  push(data) {
    if (this.currentHeight === this.limit) {
      let newStack = new Stack();
      newStack.push(data);
      this.stacks.push(newStack);
      this.currentHeight = 1;
    } else {
      this.stacks[this.stacks.length -1].push(data);
      this.currentHeight++;
    }
  }
  
  pop(){
    let deleted = this.stacks[this.stacks.length -1].pop();
    this.currentHeight--;
    if (this.currentHeight === 0) {
      this.stacks.pop();
      this.currentHeight = this.limit;
    }
    return deleted;  
  }
}

let test = new SetOfStacks(2)
test.push(1);
test.push(2);
console.log(test.currentHeight === 2);
console.log(test.stacks[0].data + ' : ' + [1,2]);
test.push(3);
console.log(test.currentHeight === 1);
console.log(test.stacks[1].data + ' : ' + [3]);
console.log(test.currentHeight === 1);
console.log(test.pop() === 3);
console.log(test.currentHeight === 2);
