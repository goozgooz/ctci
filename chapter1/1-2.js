/* 
Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.
*/ 

// Time: O(n)
// Space: O(n)

function checkPerm(str1, str2) {
  if (str1.length !== str2.length) return false;
  let chars = {};
  
  for (let letter of str1) {
    chars[letter] ? chars[letter]++ : chars[letter] = 1;
  }
  
  for (let letter of str2) {
    if (!chars[letter]) {
      return false;
    } else {
      chars[letter]--;
      if (chars[letter] < 0) {
        return false;
      }
    }
  }
  
  return true;
}

console.log(checkPerm('', '') === true);
console.log(checkPerm('so', 'os') === true);
console.log(checkPerm('sos', 'os') === false);
console.log(checkPerm('abc', 'abz') === false);
console.log(checkPerm('restful', 'fluster') === true);
console.log(checkPerm('baab', 'bbba') === false);

