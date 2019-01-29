// 3.1
// Three in One: Describe how you could use a single array to implement three stacks.
 
class ThreeInOne {
  constructor() {
    this.data = [];
    this.stack2 = 0;
    this.stack3 = 0;
  }
   
  push1(data) {
    this.data.unshift(data);
    this.stack2++;
    this.stack3++;
  }
   
  pop1() {
    if (this.stack2 === 0) return console.log('stack1 empty');
    this.stack2--;
    this.stack3--;
    return this.data.shift();
  }
   
  push2(data) {
    this.data.splice(this.stack2, 0, data);
    this.stack3++;
  }
   
  pop2() {
    if (this.stack2 === this.stack3) return console.log('stack2 is empty');
    this.stack3--;
    return this.data.splice(this.stack2, 1);
  }
   
  push3(data) {
    this.data.splice(this.stack3, 0, data);
  }
   
  pop3() {
    if (this.stack3 === this.data.length) return console.log('stack3 is empty');
    return this.data.splice(this.stack3, 1);
  }
}
 
let test = new ThreeInOne();

test.push2(2);
test.push3(3);
test.pop1();
console.log(test);