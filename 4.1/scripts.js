function range(begin, end, step) {
	var output = [];

	//test third optional arguments
	if (arguments.length == 2) step = 1;

	//first loop for positive numbers
	if (step > 0) {
		for (var i = begin; i <= end; i = i += step) {
			output.push(i);
		}
	} else {
		for (var i = begin; i >= end; i = i += step) { // second loop for negative one
			output.push(i);
		}
	}
	return output;
}

function sum(array) {
	var output = 0;
	for (var i = 0; i < array.length; i++) {
		output += array[i];
	}
	return output;
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(1, 10, 2));

console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

console.log(sum(range(1, 10)));
// → 55
