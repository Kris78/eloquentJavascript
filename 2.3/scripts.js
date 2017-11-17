var output = "", cheeseSize = 20;

for (var loops = 0; loops < cheeseSize; loops++) {

	for (var caracters = 0; caracters < cheeseSize; caracters++) {
		if (loops % 2 == 0) {
			caracters % 2 == 0 ? output += " " : output += "#"
		} else (
			caracters % 2 !== 0 ? output += " " : output += "#"
		)
	}

	output += "\n";

}

console.log(output);


//var size = 8;
//
//var board = "";
//
//for (var y = 0; y < size; y++) {
//  for (var x = 0; x < size; x++) {
//    if ((x + y) % 2 == 0)
//      board += " ";
//    else
//      board += "#";
//  }
//  board += "\n";
//}
//
//console.log(board);
