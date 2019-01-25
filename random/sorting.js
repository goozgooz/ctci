// O(n^2)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j +1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr;
}

// O(n^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

function merge(arr1, arr2) {
	const sorted = [];

	while (arr1.length && arr2.length) {
		arr1[0] < arr2[0] ? sorted.push(arr1.shift()) : sorted.push(arr2.shift());
	}

	return [...sorted, ...arr1, ...arr2];
}

// O(n log(n))
function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}

	let middle = Math.floor(arr.length / 2);
	let left = arr.slice(0, middle);
	let right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}


const unsorted = [2,4,6,8,10,1,3,5,7,9];

console.log('bubble sort: ', bubbleSort(unsorted));
console.log('selection sort: ', selectionSort(unsorted));
console.log('merge sort: ', mergeSort(unsorted));