'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const temp1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temp2 = [-10, 3, 19, 'error', 9, 'error', -8, 14, 5];

// PROBLEM 2:
// Function should now receive 2 arrays of temps

const calcAmplitude = function (a1, a2) {
  const concatArray = a1.concat(a2); // spojí pole sohromady do nového pole concatArray

  let min = concatArray[0];
  let max = concatArray[0];

  for (let i = 0; i < concatArray.length; i++) {
    let currentNumber = concatArray[i];

    if (typeof currentNumber !== 'number') continue;

    if (min > currentNumber) {
      min = currentNumber;
    }

    if (max < currentNumber) {
      max = currentNumber;
    }
  }

  return max - min; //výpočet amplitudy
};

const amplitudeResult = calcAmplitude(temp1, temp2);
console.log(amplitudeResult);
