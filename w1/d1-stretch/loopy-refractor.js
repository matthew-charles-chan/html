const loopyLighthouse  = function(range,multiples,words) {
  for (let count = range[0]; count <= range[1];count ++ ) {
    let output = ""

    if(count % multiples[0] === 0) {
      output += words[0]
    }
    if(count % multiples[1] === 0) {
      output += words[1]
    }
    console.log(output === "" ? count : output)
  }
};

loopyLighthouse([2, 30], [2, 5], ["Ben", "Barbara"]);