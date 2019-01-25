// function permutations(str) {
// 	const results = [];
// 	if (str.length === 1) {
// 		results.push(str);
// 		return results;
// 	}

// 	for (let i = 0; i < str.length; i++) {
// 		let firstChar = str[i];
// 		let otherChars = str.slice(0,i) + str.slice(i + 1);
// 		let innerPermutations = permutations(otherChars);

// 		for (let j = 0; j < innerPermutations.length; j++) {
// 			results.push(firstChar + innerPermutations[j]);
// 		}
// 	}

// 	return results;
// }

console.log(permutations('abc'));