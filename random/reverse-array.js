// reverse array inp lace

function reverseArrayInPlace(array) {
  let n = array.length;
  for (var i = 0; i < Math.floor(n / 2); i++) {
    [array[i], array[n-1-i]] = [array[n-1-i], arr[i]];
 }
 return array;
}

let arr = [0,1,2,3,4,5];
console.log(reverseArrayInPlace(arr));