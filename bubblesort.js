function bubbleSort(arr) {
	var count = 0;
	var curr, next;
	while(count < arr.length) {
		for(var i = 0; i < arr.length; i++) {
			curr = arr[i];
			next = arr[i + 1];
			if(curr && next && curr > next) { //validate index and compare values
				arr[i] = next;
				arr[i+1] = curr;
			}
		}
		count++;
	}
	return arr;
}

bubbleSort([23, 434, 1, 3, 5, 25])
bubbleSort([1, 2, 3, 4, 5, 6, 6, 10])
bubbleSort([12, 11, 9, 5])
