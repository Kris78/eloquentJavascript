var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
// → {"name":"X","born":1980}
console.log(JSON.parse(string).born);
// → 1980


var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length);
// → 39

function filter(array, test) {
	var passed = [];
	array.forEach(function(entry) {
		if (test(entry))
			passed.push(entry);
	});
	return passed;
}

console.log(filter(ancestry, function(person) {
	return person.born > 1900  && person.born < 1925;
}));
