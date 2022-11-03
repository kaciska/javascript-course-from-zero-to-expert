//JavaScript Fundamentals - Part 1

/*
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console
*/

let country = "Czech republic";
let continent = "Europe";
let population = 10;

console.log("I live in the " + country + " in the " + continent + "." + " Our country has " + population + " millions inhabitants.");

/* LECTURE: Data Types 
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);