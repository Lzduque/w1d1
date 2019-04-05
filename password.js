let input = process.argv.slice(2)[0]; // separete the in put from the rest

function obfuscate(string) {
  let words = "";
  for (var i = 0 ; i < string.length ; i++) {
  // go through the string each letter at a time
    if (string[i] === "a") {
      words = words + "4";
    } else if (string[i] === "e") {
      words = words + "3";
    } else if  (string[i] === "o") {
      words = words + "0";
    } else if  (string[i] === "l") {
      words = words + "1";
    } else {
      words = words + string[i]; // when there is nothing to change, keep the original letter
    }
  }
  return words;
}

console.log(obfuscate(input));