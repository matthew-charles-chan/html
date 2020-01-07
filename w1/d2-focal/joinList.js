/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

/*
 // create function joinList that takes in an array
  //create output variable, outputString
  // for loop, iterate over array elements
    // create output variabel for each array element, element out
    // iterate over each element withtin each array alement
      // add each individual element to output
      // if end of string and not last element in array, add ', '
*/

const joinList = function(arr) {
  let outputString = "";
  for (let i = 0; i < arr.length; i ++) {
    let elementOut = "";
    for (let j = 0; j < arr[i].length; j ++) {
      elementOut += arr[i][j];
      if (j === arr[i].length - 1 && i !== arr.length - 1) {
        elementOut += ', ';
      }
    }
    outputString += elementOut;
  }
  return outputString;
};






// Write our function (we must define it too!) below
// ...

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
