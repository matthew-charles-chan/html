
let plainPass = String(process.argv.slice(2));

const obfuscate = function() {
  let obPass = "";
  for (let i = 0; i < plainPass.length; i ++) {
    if (plainPass[i] === "a") {
      obPass += '4';
    } else if (plainPass[i] === "e") {
      obPass += '3';
    } else if (plainPass[i] === "o") {
      obPass += '0';
    } else if (plainPass[i] === "l") {
      obPass += '1';
    } else {
      obPass += plainPass[i];
    }
  }
  return obPass;
};


console.log(obfuscate());
