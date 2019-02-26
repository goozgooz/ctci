// zero matrix
// function zeroMatrix(matrix) {
// 	let row = Array(matrix.length).fill(false);
// 	let column = Array(matrix[0].length).fill(false);

// 	for (let i = 0; i < row.length; i++) {
// 		for (let j = 0; j < column.length; j++) {
// 			if (matrix[i][j] === 0) {
// 				row[i] = true;
// 				column[j] = true;
// 			}
// 		}
// 	}
//   
// 	for (let i = 0; i < row.length; i++) {
// 		for (let j = 0; j < column.length; j++) {
// 			if (row[i] || column[j]) {
// 				matrix[i][j] = 0;
// 			}
// 		}
// 	}

// 	return matrix;
// }


const matrix =[
  [0, 2, 3, 4, 1],
	[6, 2, 8, 9, 0],
	[11, 12, 1, 14, 15],
	[16, 17, 18, 19, 20],
	[0, 22, 23, 1, 25]
]
console.log(zeroMatrix(matrix))