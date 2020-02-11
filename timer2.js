const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('\x07')
  }
  let number = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
  if (number.includes(key)) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    // let time = input[0]
    // for (let number of input) {
      // if (key > 0 || key === Number) {
        let time = key * 1000
        setTimeout(() => {
          process.stdout.write('\x07');
        }, time)
      // }
    // }
  }
  // process.stdout.write('.');
});

console.log('after callback');