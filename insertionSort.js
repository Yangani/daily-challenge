function insertionSort(arr) {
	var position = 1;
	while(position < arr.length) {
		var min = position;
		var val = arr[position];
		for(var i = position - 1; i >= 0; i--) {
			if(val < arr[i]) {
				min = i;
			}
		}
		if(position > min) {
			arr.splice(position, 1);	//Remove the item swapped
			arr.splice(min, 0, val);    //insert the item in suitable place
		}
		position++;
	}
	return arr;
}

console.log("Test 1: ", insertionSort([23, 434, 1, 3, 5, 25]));
console.log("Test 2: ", insertionSort([10, 2, 9, 4, 7, 1, 8]));
console.log("Test 3: ", insertionSort([12, 11, 9, 15, 2, 16]));
console.log("Test 4: ", insertionSort([1, 2, 3, 4, 5, 6, 7]));
console.log("Test 5: ", insertionSort([7, 6, 5, 4, 3, 2, 1]));
