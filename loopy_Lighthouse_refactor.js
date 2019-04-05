function loopyLighthouse(range, multiples, words) {
  for (var i = range[0] ; i <= range[1] ; i++) {
    var output = "";
    //if the number i is a multiple of the first multiples add the first words to the result
    if (i % multiples[0] === 0) {
      output += words[0];
    }
    //if the number i is a multiple of the second multiples add the second words to the result
    if (i % multiples[1] === 0) {
      output += words[1];
    }
    console.log(output === "" ? i : output);
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
