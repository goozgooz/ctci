function isValid(str) {
  let open = ['[', '(', '{'];
  let close = [']', ')', '}'];
  let stack = []
  
  for (let bracket of str) {
    let index = close.indexOf(bracket);
    
    if (index > -1) {
      let match = open[index];
      if (!stack.length || match !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(bracket);
    }
  }
  
  return !stack.length;
};

console.log(isValid("([)]") === false) // false
console.log(isValid("()") === true) // true
console.log(isValid("{}[]()") === true) // true
console.log(isValid("{[}]") === false) // false
console.log(isValid("{[}]") === false) // false
console.log(isValid("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]") === true) // true
console.log(isValid("{}[]()") === true) // true