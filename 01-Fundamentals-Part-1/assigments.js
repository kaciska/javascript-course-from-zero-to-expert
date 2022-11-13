//JavaScript Fundamentals - Part 1

/*
LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console
*/

/*
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
/*
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

/*
let halfCountryPopulation = population / 2;
console.log("Half population of Czech republic is", halfCountryPopulation, "millions.")

console.log(population += 1);

const hasMorePopulation = population > 6;
console.log("It is", hasMorePopulation, "that Finland has bigger population than Czech republic.")

const moreThanAveragePopulation = population < 33;
console.log("It is", moreThanAveragePopulation, "that Czech republic has less people than average country.")

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`
console.log(description);

/* LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/

/*
if (population > 33) {
    console.log("Czech's population is above average");
    } else {
        console.log(`Czech's population is ${33 - population} millions below average.`)
    }
*/

/*
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
// 2. Execute the operations to check if you were right */

/*
'9' - '5'; // 4 (number)
'19' - '13' + '17'; // "617" (string)
'19' - '13' + 17; // 23 (number)
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143 (number)




/*
LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation
*/

/*
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) { // if it is loose equality, it is ok, because input from prompt is string, but if we use strict equality, it is automatically "No borders"
    console.log("Only 1 border.")
} else if (numNeighbours > 1) {
    console.log("More than 1 border.")
} else {
    console.log("No borders.")
} */

/*
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)
*/

/*
if (language === "English" && population < 50 && !isIsland) {
    console.log(`You should live in ${country}.`)
} else {
    console.log(`${country} does not meet your criteria.`)
}*/


/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/

/*
switch(language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers");
        break;
    case "spanich":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}*/

/*
LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/

/*
population > 33 ? console.log("Czech's population is above average.") : console.log("Czech's population is below average.")
console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average.`)
*/


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
/*const heightMark = 1.88;
const weightMark = 95;
const heightJohn = 1.76;
const weightJohn = 85;

const bmiMark =  (weightMark / heightMark ** 2).toFixed(1);
console.log("BMI Mark", bmiMark);

const bmiJohn =  (weightJohn / heightJohn ** 2).toFixed(1); //toFixed converts number to string, rounded
console.log("BMI John", bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log("The statement, that Mark's BMI is higher than John's, is", markHigherBMI);
*/

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

/*
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`)
} else {
    console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}!`)
}*/

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

/*const dolphinsAverageScore = Math.round((97 + 112 + 101) / 3);
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
}*/


/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§
Data 1: Test for bill values 275, 40 and 430
*/

/*
const bill = 275;

const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

const totalValue = bill + tip;

console.log(`The bill is ${bill}, the tip is ${tip} and total value is ${totalValue}.`) */


// JavaScript Fundamentals – Part 2
// Note: Please start Part 2 from scratch and comment out all the code from Part 1.

/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

function describeCountry(country, population, capitalCity) {
    const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return countryDescription;      
}

const czechia = describeCountry("Czech republic", 10, "Praha");
const bosna = describeCountry("Bosna and Herzegovina", 3, "Sarajevo");
const slovakia = describeCountry("Slovakia", 5, "Bratislava");

console.log(czechia, bosna, slovakia);

/*
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/

function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const czechPercentage = percentageOfWorld1(10);
console.log(czechPercentage);

const bosnaPercentage = percentageOfWorld1(3);
console.log(bosnaPercentage);

const slovakiaPercentage = percentageOfWorld1(5);
console.log(slovakiaPercentage);


// function expression
const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

console.log(percentageOfWorld2(10));

console.log(percentageOfWorld2(3));

console.log(percentageOfWorld2(5));


/*
LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'
*/

const percentageOfWorld3 = population => population / 7900 * 100; // one line code

/*const percentageOfWorld3 = (population) => { // more lines of code
    return population / 7900 * 100;
}*/


console.log(percentageOfWorld3(10));
console.log(percentageOfWorld3(3));
console.log(percentageOfWorld3(5));


/*
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} % of the world.`
}

console.log(describePopulation("Poland", 38));
console.log(describePopulation("Ukraine", 44));
console.log(describePopulation("USA", 332));


/*
LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice.
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

const populations = [38, 44, 332, 10];

console.log("Population length equals 4:", populations.length === 4 ? true : false);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])]
console.log("Populations percentages are", percentages)


/*
LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

const neighboroughs = ["Slovakia", "Poland", "Austria", "Germany"];

neighboroughs.push("Utopia");
console.log(neighboroughs);

neighboroughs.pop();
console.log(neighboroughs)

neighboroughs.includes("Germany") ? console.log("Central European country") : console.log("Probably not a central European country :D");

console.log("Austria index", neighboroughs.indexOf("Austria"));
neighboroughs[2] = "Ukraine";

console.log(neighboroughs[2])

/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§
§
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

// it is better to have more generic function so
const calcAverage2 = (a, b, c) => (a + b + c) / 3;

let avgDolphins = calcAverage(44,23,71);
let avgKoalas = calcAverage(65,54,49);

const checkWinner = (avgDolphins, avgKoalas) => {        

    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else {
        console.log("No team wins.")
    }
}

checkWinner(avgDolphins, avgKoalas);

// For test data 2, we will reassign these variables
avgDolphins = calcAverage(85,54,41);
avgKoalas = calcAverage(23,34,27);

checkWinner(avgDolphins, avgKoalas);


/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/

let tip;

// more line codes arrow function
const calcTip = bill =>  {
    bill >= 50 && bill <= 300 ? tip = 15 / 100 : tip = 20 / 100;
    return tip * bill;
}

// second way - one line arrow funticon
const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("Tips are:", tips)

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log("Totals are:", total)


// Object challenge from lecture 43
// Write: Jonas has 3 friend, his best friend's name is Michael (3 variables -> name, number of friends and best friend name)

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Tom", "Bob"]
}

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, his best friend's name is ${jonas.friends[0]}.`)


// Object challenge from lecture 44
// Write: Jonas is 46-years old teacher and he has a driver license.

const jonas2 = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Tom", "Bob"],
    hasDriverLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is ${this.calcAge()} years old ${this.job} and he ${(this.hasDriverLicense ? "has driver license." : "has not driver license")}`
    }
    
}

jonas2.calcAge();

console.log(jonas2.getSummary())


/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
GOOD LUCK 😀
*/

const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}


console.log(`${john.firstName} ${john.lastName}'s BMI ${john.calcBMI()} is ${(john.calcBMI() > mark.calcBMI() ? "higher" : "less")} than ${mark.firstName} ${mark.lastName} ${mark.calcBMI()}`)