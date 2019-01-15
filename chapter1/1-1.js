/**
 * 1.1
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
 * cannot use additional data structures?
 **/
 
// Time Complexity: O(n)
// Space Complexity: O(n)

// function isUnique(str) {
//   if (typeof str !== 'string') return null;
//   let chars = {};
//   for (let letter of str) {
//     if (letter !== ' ') {
//       if (chars[letter]) {
//         return false;
//       } else {
//         chars[letter] = true;
//       }
//     }
//   }
//   return true;
// }

// without a buffer
// function isUnique(str) {
//   if (typeof str !== 'string') return null;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] !== ' ') {
//         if (str[i] === str[j]) return false;
//       }
//     }
//   }
//   return true;
// }

console.log(isUnique([1,2,3]) === null);
console.log(isUnique('hi bro sup') === true);
console.log(isUnique('poop') === false);

// module.exports = isUnique;