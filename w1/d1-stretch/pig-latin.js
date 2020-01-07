const engSpeech = process.argv.slice(2);
const pigLatinize = function() {
  let pigSpeech = "";
  for (let i = 0; i < engSpeech.length; i ++) {
    let pigWord = "";
    for (let w = 1; w < engSpeech[i].length; w++) {
      pigWord += engSpeech[i][w];
    }
    pigWord += engSpeech[i][0] + "ay ";
    pigSpeech += pigWord;
  }
  return pigSpeech;
};

console.log(pigLatinize());