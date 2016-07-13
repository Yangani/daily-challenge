function selectionSort(arr) {
	var current = 0;
	while(current < arr.length) {
		var minIndex = current;
		var temp = arr[current];
		for(var i = current + 1; i < arr.length; i++) {
			if(arr[minIndex] > arr[i]) {
				minIndex = i;
			}
		}
		arr[current] = arr[minIndex]; //Swap
		arr[minIndex] = temp;
		current++;
	}
	return arr;
}

console.log("Test 1: ", selectionSort([23, 434, 1, 3, 5, 25]));
console.log("Test 2: ", selectionSort([10, 2, 9, 4, 7, 3, 8]));
console.log("Test 3: ", selectionSort([12, 11, 9, 15, 2, 16]));
console.log("Test 4: ", selectionSort([1, 2, 3, 4, 5, 6, 7]));
console.log("Test 5: ", selectionSort([7, 6, 5, 4, 3, 2, 1]));
