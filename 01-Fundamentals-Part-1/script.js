let js = 'amazing';
console.log(42 + 18 - 7 + 1);

// use camelCase 
let firstName = "Katka";

// different color of the variable name because of the capital letters
const PI = 3.1415; 

// names can only contain numbers, letters, underscores or $ sign
// dont use names like: name, function, new -> they are reserved JS keyboard

// dont use first capital letter f.e. Person but
let person = "Tomas";

// use descriptive variable names
let myFirstJob = "Marketing Coordinator";
let myCurrentJob = "Programmer";

// insted of this
let job1 = "Marketing Coordinator";
let job2 = "Programmer";

// boolean
true;
console.log(true); // returns true

// undefined
let year;
console.log("year", year); // value = undefined value
console.log(typeof year); // type = undefined

// null
console.log(typeof null) // returns object, but it should be also null. It is bug/error of JS


// FUNCTIONS

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges}.`
    console.log(juice) // tady to vrátí rovnou do konzole už při volání funkce
    return juice;    
}

fruitProcessor(5,0)
console.log(fruitProcessor(5,0));


// Function declaration - with function keyword
// can be called before initialization
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1988);
console.log(age1);


// Function expression (anonymous function)
// cannot be called before initialization
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1988);
console.log(age2);


// Arrow function - one line code
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1988);
console.log(age3);

// Arrow function - more line code
const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
};

// Arrow function - more parametres
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
};