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
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/

const myCountry = {
    country: "Czech republic",
    capital: "Prague",
    language: "czech",
    population: 10,
    neighbours: ["Slovakia", "Austria", "Germany", "Poland"]
}

/*
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.
*/

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`)

myCountry.population += 2;
console.log(myCountry.population)

myCountry["population"] -= 2;
console.log(myCountry["population"])


/*
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property.
*/

const myCountry2 = {
    country: "Czech republic",
    capital: "Prague",
    language: "czech",
    population: 10,
    neighbours: ["Slovakia", "Austria", "Germany", "Poland"],
    describe: function() {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
}

myCountry2.describe();
console.log(myCountry2.checkIsland());



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