/*
[x] - take in 'number of dice rolls'
[x] - repeat dice roll for  'number of rolls'
[x] - generate random number between 1 -6
[x] - create string "rolled x dice: y, z , j"
*/

//take in number of dice rolls
const numOfRolls = Number(process.argv.slice(2));

// generate random num between 1 - 6
const creatRandomInt = function() {
  let RandomNum = (Math.round(Math.random() * 6));
  return RandomNum;
};


// repeat dice roll for numOfRolls
const rollDice = function() {
  let diceRolls = "";
  for (let i = 0; i < numOfRolls; i ++) {
    diceRolls += creatRandomInt();
    if (i < (numOfRolls - 1)) {
      diceRolls += ', ';
    }
  }
  // create string "rolled x dice: y, z , j"
  return `Rolled ${numOfRolls} dice: ${diceRolls}`;
};

console.log(rollDice());