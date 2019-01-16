/** 
 * 1.3
 * URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
 * has sufficient space at the end to hold the additional characters, and that you are given the "true"
 * length of the string. (Note: If implementing in Java, please use a character array so that you can
 * perform this operation in place.)
 * EXAMPLE
 * Input: "Mr John Smith "J 13
 * Output: "Mr%20J ohn%20Smith"
 */
 
 // Time: O(n)
 // Space: O(n)
 
function urlify(str) {
  return str.split('').map(letter => letter === ' ' ? '%20' : letter).join('');
}

console.log(urlify('hello what are you doing?'))
 
 