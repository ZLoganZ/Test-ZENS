const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

/*
 * @author Nguyen Hoang Hai
 * @version 1.0, 30 Mar 2024
 */

// Find the minimum and maximum values that can be calculated by summing exactly four of the five integers
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

// Count total of array
// function countTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   console.log(total);
// }

// Find min in array
// function findMin(arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   console.log(min);
// }

// Find max in array
// function findMax(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log(max);
// }

// Find even elements in array
// function findEven(arr) {
//   let even = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i]);
//     }
//   }
//   console.log(even);
// }

// Find odd elements in array
// function findOdd(arr) {
//   let odd = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       odd.push(arr[i]);
//     }
//   }
//   console.log(odd);
// }

let numbers = '';

rl.on('line', (input) => {
  numbers = input;
  rl.close();
});

rl.on('close', () => {
  // Split the input string into an array of numbers
  let arr = numbers.split(' ').map(Number);
  miniMaxSum(arr);
  // countTotal(arr);
  // findMin(arr);
  // findMax(arr);
  // findEven(arr);
  // findOdd(arr);
});
