'use strict';

// Function is is a global scope - it is here in the top level
function calcAge(birthYear) {
  const age = 2037 - birthYear; // Function here creates his own scope = is equivalent to the variable enviroment of its execution context
  console.log(firstName); // the firstName is global, so we can call it also inside the function
  // JS při volání funkce sice nenašel proměnnou firstName zde, ale provedl lookup in scope chain

  function printAge() {
    // longer variable lookup for the firstName variable
    const output = `${firstName}, you are ${age}, born in ${birthYear}.`; //age and birthYear are variables in parent scope, a JS postupuje/kouká směrem nahoru, proto jsou dostupné
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      const firstName = 'Steven'; // block scope, v proměnné str se zobrazí tento firstName, protože se program dívá nejprve sem a až potom výš

      const str = `Oh, you are a millenial, ${firstName}`; //firstName still availbale (global scope)
      console.log(str);

      function add(a, b) {
        //funttion is inside block of if code and from E6 it is also block scoped
        return a + b;
      }
    }
    //console.log(str); -> not available, const and let are block scope and are available only in ther block which were created
    console.log(millenial); // we see true in console, VAR is function scope and we are still in the function

    add(2, 3); //takže zde už k té block scope funkci nemáme přístup -> když vypneme strict mode, bude to fungovat, ale strict mode nevypínat
  }

  printAge();

  return age;
}

//global variable - funkce k proměnné má přístup, i když byla deklerováná až po deklarování funkce
const firstName = 'Jonas';

calcAge(1988);
// Code in the function is only executed once it's actually called. And we call the function after the declaration of firstName variable.
// Kdybychom volali funkci před deklarací firstName, vyhodí nam to referenceError - cannot access firstName before initialization.

/*Here in global scope we do not have access in any other scope!!!
console.log(age); // tady už je ale age mimo scope, proto console hládí "is not defined"
console.log(printAge()); // stejně tak při volání této funkce*/
