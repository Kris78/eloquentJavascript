//function countBs(Bs) {
//	var BsLenght = Bs.length, BsCounter = 0;
//	for (i = 0; i < BsLenght; i++) {
//		if (Bs.charAt(i) == "B")
//			BsCounter += 1;
//	}
//	return BsCounter;
//}

function countBs(Bs) {
	return countChar(Bs, "B");
}

function countChar(String, Char) {
	var StringLenght = String.length, StringCounter = 0;
	for (i = 0; i < StringLenght; i++) {
		if (String.charAt(i) == Char)
			StringCounter += 1;
	}
	return StringCounter;
}



console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
