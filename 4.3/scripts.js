function arrayToList(array) {
	var list = null;
	for (var i = array.length; i > 0; i--) {
		list = {
			value: array[i - 1],
			rest: list
		}
	}
	return list;
}


function listToArray(list) {
	var array = [];
	for (var node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}


function prepend(value, list) {
	return list = {value: value, rest: list}
}


function nth(list, position) {
	if (!list)
		return undefined;
	else if (position == 0)
		return list.value;
	else
		return nth(list = list.rest, position = position - 1)
}




console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
//// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
//// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 0));
//// → 20

