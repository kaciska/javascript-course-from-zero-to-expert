//JavaScript Fundamentals - Part 1

/*
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console
*/

const country = "Czech republic";
const continent = "Europe";
let population = 10;

console.log("I live in the " + country + " in the " + continent + "." + " Our country has " + population + " millions inhabitants.");

/* 
LECTURE: Data Types 
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

const isIsland = false;
//const language; it cannot be empty, if it is const
const language = "Czech";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

/*
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/

// const language = "Czech"; already declared

/*
LECTURE: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/

let halfCountryPopulation = population / 2;
console.log("Half population of Czech republic is", halfCountryPopulation, "millions.")

console.log(population += 1);

const hasMorePopulation = population > 6;
console.log("It is", hasMorePopulation, "that Finland has bigger population than Czech republic.")

const moreThanAveragePopulation = population < 33;
console.log("It is", moreThanAveragePopulation, "that Czech republic has less people than average country.")

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`
console.log(description);

/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

/*const heightMark = 1.69;
const weightMark = 78;
const heightJohn = 1.95;
const weightJohn = 92;*/

// const used because I already know that I'm not going to change it here
const heightMark = 1.88;
const weightMark = 95;
const heightJohn = 1.76;
const weightJohn = 85;

const bmiMark =  (weightMark / heightMark ** 2).toFixed(1);
console.log("BMI Mark", bmiMark);

const bmiJohn =  (weightJohn / heightJohn ** 2).toFixed(1); //toFixed converts number to string, rounded
console.log("BMI John", bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log("The statement, that Mark's BMI is higher than John's, is", markHigherBMI);


/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
 */

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`)
} else {
    console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}!`)
}

/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const dolphinsAverageScore = Math.round((97 + 112 + 101) / 3);
const koalasAverageScore = Math.round((109 + 95 + 106) / 3);

console.log("Dolphins average score:", dolphinsAverageScore);
console.log("Koalas average score:", koalasAverageScore)

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log(`Doplhins win with the average score ${dolphinsAverageScore}`)

} else if (dolphinsAverageScore < koalasAverageScore && dolphinsAverageScore >= 100) {
    console.log(`Koalas win with the average score ${koalasAverageScore}"`)

} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100) { // musí mít stejný výsledek, takže stačí dát podmínku 100 bodů jen jednomu týmu
    console.log("They have same score above 100 points, nobody win.")

} else {
    console.log("Nobody has minimum of 100 points.")
}