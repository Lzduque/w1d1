let input = process.argv.slice(2); // separete the in put from the rest

function pigLatin(array) {
  var finalString = "";
  for (var i = 0 ; i < array.length ; i++) {
    var pigWord = "";
    for (var j = 1 ; j < array[i].length ; j++) {
      pigWord = pigWord + array[i][j];
    }
    pigWord = pigWord + array[i][0];
    pigWord = pigWord + "ay";
    finalString = finalString + pigWord;
    finalString = finalString + " ";
  }
  return finalString;
}

console.log(pigLatin(input));