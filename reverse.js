let input = process.argv.slice(2); // separete the in put from the rest

function reverse(array) {
  for (var i = 0 ; i < array.length ; i++) { //get inside each array element
    var words = "";
    for (var j = array[i].length - 1; j >= 0 ; j--) { // go through each letter backwards
      words += array[i][j];
    }
    console.log(words);
  }
}

reverse(input);
