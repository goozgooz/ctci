/**
 * 1.9
 * String Rotation: Assume you have a method isSubst ring which checks if one word is a substring
 * of another. Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one
 * call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").
 */
 
function isSubstring(s1, s2) {
  if (s1.length !== s2.length) return false;
	return (s2 + s2).includes(s1);
}

console.log(isSubstring('waterbottle', 'erbottlewat') === true);
console.log(isSubstring('waterbottle', 'erbotlewatt') === false);
console.log(isSubstring('aaata', 'aataa') === true);