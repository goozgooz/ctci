// 3.2
// Stack Min: How would you design a stack which, in addition to push and pop, has a function min
// which returns the minimum element? Push, pop and min should all operate in 0(1) time.
 
class Stack {
  constructor() {
    this.data = [];
    this.min = [];
  }
   
  push(data) {
    this.data.push(data);
    if (!this.min.length) {
      this.min.push(data);
    } else {
      let currentMin = this.min[this.min.length -1];
      data < currentMin ? this.min.push(data) : this.min.push(currentMin); 
    }
  }
   
  pop() {
    this.min.pop();
    return this.data.pop();
  }
   
  currentMin() {
    return this.min[this.min.length -1];
  }
}
 
let test = new Stack();
test.push(10);
test.push(20);
test.push(1);
test.push(5);
console.log(test.currentMin() === 1);
test.pop();
test.pop();
console.log(test.currentMin() === 10);
