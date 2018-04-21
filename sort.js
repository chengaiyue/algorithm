function bubbleSort(arr) {
	let length = arr.length;
	for (let i = 0; i < length; i++) {
		for (let j = i+1; j < length; j++) {
			if (arr[i] > arr[j]) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
	return arr;
}

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	let leftArr = [];
	let rightArr = [];
	let q = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > q) {
			rightArr.push(arr[i]);
		} else {
			leftArr.push(arr[i]);
		}
	}
	
	return [].concat(quickSort(leftArr), [q], quickSort(rightArr));
}

let arr = [4,4,5,5,6,8,7,9,7,12,1221,2,11,21,21];

let newArr1 = bubbleSort(arr);
let newArr2 = quickSort(arr);
console.log(newArr2);

