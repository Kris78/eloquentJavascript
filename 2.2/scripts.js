//
//for (var number = 1; number <= 100; number++) {
//	if (number % 3 == 0 && number % 5 == 0) {
//		console.log("BuzzFizz");
//	}
//	else if (number % 3 == 0) {
//		console.log("Fizz");
//	}
//	else if (number % 5 == 0) {
//		console.log("Buzz");
//	}
//	else {
//		console.log(number);
//	}
//}

for (var number = 1; number <= 100; number++) {
	var word = "";

	if (number % 3 == 0) {
		word = "Fizz";
	}

	if (number % 5 == 0) {
		word += "Buzz";
	}

	console.log(word || number)
}
