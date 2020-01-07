const array = process.argv.slice(2)
const reverseString = function() {
  let output = "";
  for (let i = 0; i < array.length; i++) {
    let elementOut = "";
    for (let j = (array[i].length - 1); j >= 0; j --) {
      elementOut += array[i][j];
    }
     if ( j < array.length - 1)
      {output += elementOut + '\n';
  }
  }
  return output;
};

console.log(reverseString());