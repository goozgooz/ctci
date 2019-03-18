// function reverseArray(arr) {
// 	for (let i = 0; i < Math.floor(arr.length/2); i++) {
// 		[arr[i],arr[arr.length - 1 - i]] = [arr[arr.length-1-i], arr[i]]
// 	}

// 	return arr;
// }
		
// function reverseArray(arr) {
// 	let n = arr.length - 1;
// 	for (let i = 0; i < Math.floor(arr.length/2); i++) {
// 		[arr[i],arr[n-i]] = [arr[n-i],arr[i]];
// 	}
// 	return arr;
// }

let arr = [0,1,2,3,4,5,6];
let arr2 = [0,1,2,3,4,5];
console.log(reverseArray(arr));
console.log(reverseArray(arr2));