var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.



var result =

arrays.reduce(function(a, b) {
	return a.concat(b);
});

console.log(result);
// → [1, 2, 3, 4, 5, 6]
