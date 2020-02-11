let input = process.argv.slice(2)
// console.log(input)
let time = input[0]
for (let number of input) {
  if (number > 0 || number === Number) {
    setTimeout(() => {
      process.stdout.write('\x07' + number + ' seconds\n');
    }, time = number * 1000)
  }
}