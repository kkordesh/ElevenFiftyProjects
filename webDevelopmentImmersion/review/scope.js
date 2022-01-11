/*
    SCOPE

     -Scope is the hierarchy of variables in our code - also commonly referred to as global scope and local scope
         -local scopes have access to global scope, but not vice versa
*/

let coffeeType= 'dark roast'; // globally scoped variable 

function exampleFunction() {
    let x = 'declared inside function body'; // Locally scoped variable
    console.log(x);
    console.log(coffeeType);
}

exampleFunction();

// console.log(x); // cannot access variable of x in the global scope of the document, since x is locally scoped to the function exampleFunction
