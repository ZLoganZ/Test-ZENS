const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

/**
 * @author Nguyen Hoang Hai
 * @version 1.0, 30 Mar 2024
 */

function miniMaxSum(arr) {
  let sum = 0; // or could use arr.reduce((a, b) => a + b)
  let min = arr[0]; // or could use Math.min(...arr)
  let max = arr[0]; // or could use Math.max(...arr)

  // Find the sum, min, max of the array
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(sum - max, sum - min);
}

let numbers = '';

rl.on('line', (input) => {
  numbers = input;
  rl.close();
});

rl.on('close', () => {
  // Split the input string into an array of numbers
  let arr = numbers.split(' ').map(Number);
  miniMaxSum(arr);
});
