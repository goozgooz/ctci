/**
 * 1.6
 * String Compression: Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
 * "compressed" string would not become smaller than the original string, your method should return
 * the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 */

// Time: O(n);
// Space: O(n);

function stringCompression(str) {
  let compressed = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
    } else {
      compressed += (str[i] + count);
      count = 1;
    }
  }

  return compressed.length < str.length ? compressed : str;
}

console.log(
  stringCompression('aabcccccaaa') === 'a2b1c5a3',
  stringCompression('aa') === 'aa',
  stringCompression('aaAAaa') === 'aaAAaa',
  stringCompression('aaaAAaa') === 'a3A2a2',
  stringCompression('') === ''
);
