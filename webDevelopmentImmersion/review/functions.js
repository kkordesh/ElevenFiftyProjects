/*
    FUNCTIONS

    - javascript functions are defined with the function keyword, and can be written as a function declaration or a function expression
        -function declarations are hoisted in our code, and run only when we call them. (Like a student raising their hand)
        -function expressions are not hoisted in our code, and are generally stored in variables. 

    - functions without names are known as anonymous functions 
*/

// FUNCTION DECLARATION

function sayHello() {
    console.log('hi')
}

sayHello(); // function invocation, or function call - parenthesis let the function know that it needs to be ran. If the parents are omitted, the function will not run

// FUNCTION EXPRESSION 

let greetings = function () {  // anonymous function (no function name)
    console.log('hello')
}

greetings();


/*
    PARAMETERS

    - think of parameters as a newly declared variable that we haven't given a value to yet - it's essentially a placeholder
        - the value we pass into our function we we call the function to run (this is also known as the argument), is the value that gets assigned to the parameter
    - general naming convention for parameters: parameters should be named something related to the information that gets passed into the function

*/

function myDog(husky){
    console.log(`My dogs name is ${husky}`) //output: my dogs name is Luna
}

myDog('Luna') //parameter looks like let husky= 'luna'... assigns value to husky 

//

function randomNumber(number) {
    console.log(number);
}

randomNumber(10); //output: 10 

//

function allMyDogs(smallHusky, bigHusky, borderCollie){
    console.log(`My dogs are named ${smallHusky}, ${bigHusky}, ${borderCollie}`);
}
allMyDogs('Mira', 'Luna', 'Charlie'); // the order in which we declare arguments will line up with the order in which we declared the parameters


/*
    RETURN

    - functions can also manipulate the data sent to them, and return a new value
*/

// average weight of 3 dogs
function calculator(one, two, three){
    let totalWeight = one + two + three; // 155 (assigned to totalWeight)
    let average = Math.round(totalWeight / 3);

    return average;  // going to give us access to the average variable outside of the function 
}
let averageWeight = calculator(40, 60, 55);
console.log(averageWeight);
//calculator(40, 60, 55);

/*
    ARROW FUNCTIONS

    - arrow functions (or fat arrow functions) were introduced in ES6. They are a more concise way to write function, expressions, not function declarations
        - arrow functions do not get hoisted since they are technically function expressions 
    - there are two types of arrow functions - concise body and block body 
        - CONCISE body arrow function DO NOT open up a function body, and they are written on a single line. Concise body arrow functions are best used for single operations. The return is implicit with concise body arrow functions. 
        - BLOCK body arrow functions DO open up a function body. The return does not happen automatically with block body arrow functions, we as developers have to manually type the return keyword out. 
*/

// CONCISE BODY ARROW FUNCTION 

let speak = name => console.log(`${name} goes woooof.`); // When there is only a single parameter, the () can be omitted. 
let speak = (name) => console.log(`${name} goes woooof.`); // () can also be included if there is a single parameter

speak('Luna');

// CONCISE BODY ARROW FUNCTION W/ RETURN

let nameJoiner = (first, last) => `${first} ${last}`;
let fullName = nameJoiner('Patrick', 'Star')
console.log(fullName); //Patrick Star

//function nameJoiner(first, last) {
//    return `${first} ${last}`;
//}

// BLOCK BODY ARROW FUNCTION 
let speak = (name) => {
    console.log(`${name} goes woooof`);
}
speak('Mira');


// BLOCK BODY ARROW FUNCTION WITH RETURN 

let nameJoiner = (first, last) => {
    return `${first} ${last}`;

}
let fullName = nameJoiner ('Spongebod', 'Squarepants');
console.log(fullName);