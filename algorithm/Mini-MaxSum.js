const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

/**
 * @author Nguyen Hoang Hai
 * @version 1.0, 30 Mar 2024
 */

function miniMaxSum(arr) {
  let sum = 0;
  let min = arr[0];
  let max = arr[0];

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
  let arr = numbers.split(' ').map(Number);
  miniMaxSum(arr);
});
