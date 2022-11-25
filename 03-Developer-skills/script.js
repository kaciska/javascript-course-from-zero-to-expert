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

// DEBUGGING USING CONSOLE.LOG

const kelvinTemperature = function () {
  const measurement = {
    type: 'temperature',
    unit: 'Celsius',
    // C) convert the value to number
    //value: Number(prompt('Enter a temperature in Celsius:')),
    value: 10,
  };

  // B) FIND a BUG -> prompt always make a string from value -> we need to convert it

  console.table(measurement); // vypíše výsledky v konzoli v tabulce
  // console.warn -> v konzoli žlutě s ikonou trojúhelníku
  // console.error -> v konzoli červeně s ikonou

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY the BUG
const kelvinTemp = kelvinTemperature();
console.log(kelvinTemp);

/*Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]*/

const forecast = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  return `... ${string}`;
};

console.log(printForecast(forecast));
sdfsdf;
