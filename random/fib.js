function fib(n) {
  let results = [];
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      results.push(i);
    } else {
      results.push(results[i-1] + results[i-2]);
    }
  }
  
  return results[n];
}

function recursiveFib(n) {
  if (n < 2) return n;
  
  return recursiveFib(n-1) + recursiveFib(n-2);
}

let fibonacci = [0,1,1,2,3,5,8,13,21,34];

console.log(fib(0) === fibonacci[0]);
console.log(fib(1) === fibonacci[1]);
console.log(fib(3) === fibonacci[3]);
console.log(fib(7) === fibonacci[7]);

console.log(recursiveFib(0) === fibonacci[0]);
console.log(recursiveFib(1) === fibonacci[1]);
console.log(recursiveFib(3) === fibonacci[3]);
console.log(recursiveFib(7) === fibonacci[7]);