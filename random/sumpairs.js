// function sumPairs(array, target){
// 	array = array.sort((a,b) => a-b);
// 	let low = 0;
// 	let high = array.length - 1;
// 	let pairs = [];

// 	while(low < high){
// 		let sum = array[low] + array[high];
		
// 		if(sum === target) {
// 			pairs.push([array[low], array[high]]);
// 			low++;
// 			high--;
// 		}

// 		if(sum < target){
// 			low++;
// 		}

// 		if(sum > target){
// 			high--;
// 		}
// 	}

// 	return pairs;
// }


// function sumPairs(arr, target) {
// 	const pairs = [];
// 	const map = {};

// 	for (let num of arr) {
// 		if (!map[num]) map[num] = true;
// 		let pair = target - num;
// 		if (map[pair]) pairs.push([num,pair]);
// 	}
// 	return pairs;
// }

function sumPairs(arr, target) {
	let pairs = [];
	let matches = {};

	for (let num of arr) {
		if (matches[num]) {
			pairs.push([num, matches[num]]);
		} else {
			let compliment = target - num;
			matches[compliment] = num;
		}
	}

	return pairs;
}

let arr = [2,4,6,1,3,5];
console.log(sumPairs(arr, 7))