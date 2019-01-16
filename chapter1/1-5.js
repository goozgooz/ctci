/**
 * 1.5
 * One Away: There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 * EXAMPLE
 * pale, pIe -> true
 * pales. pale -> true
 * pale. bale -> true
 * pale. bake -> false
 */
 
// Time: O(n)
// Space: O(1)
 
function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) return false;
  
  let maxLength = Math.max(str1.length, str2.length);
  let edits = 0;
  
  for (let i = 0, j = 0; i < maxLength || j < maxLength; i++, j++){
    let char1 = str1[i];
    let char2 = str2[j];
    
    if (char1 !== char2) {
      edits++;
      
      if (edits > 1) {
        return false;
      }
        
      if (char1 === str2[j+1]) {
        j++;
       } else if (str1[i+1] === char2) {
        i++;
      }
    }
  }
  
  return true;
}

console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);