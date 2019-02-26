// function rotateMatrix(matrix) {
//   let n = matrix.length - 1;

//   for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
//     for (let j = i; j < n - i; j++) {
//       let temp = matrix[i][j];
//       matrix[i][j] = matrix[n-j][i];
//       matrix[n-j][i] = matrix[n-i][n-j];
//       matrix[n-i][n-j] = matrix[j][n-i];
//       matrix[j][n-i] = temp;
//     }
//   }

//   return matrix;
// }


const A = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16]
]

console.log(rotateMatrix(A));