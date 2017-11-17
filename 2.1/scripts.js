console.log("toto");

var counter = 0, triangle = "#";

while (counter < 7) {
	console.log(triangle);
	triangle += "#";
	counter ++;
}

for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
