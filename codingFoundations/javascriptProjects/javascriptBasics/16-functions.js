// FUNCTIONS
// They are reusable chunks of code that perform a set of actions when we call them or "invoke" them. 

/*
SYNTAX

function nameOfOurFunction() {
logic nested here
}

*/

function hi() {
    console.log("Oh hi, Mark!")
}

// FUNCTION EXPRESSIONS
// function expressions are functions stored within variables. 

/*
SYNTAX

let nameOfVariable = function nameOfFunction(){
    logic nested here
}

*/

let hi = function hello () {
    console.log("Oh hi, Mark!")
};

// NOTE: function declarations get hoisted and function expressions do NOT!

// INVOKING 
// invoking is what references our function and allows it to run.

/*
SYNTAX

function name() {
    logic nested here
}

name();
*/

function hello (){
    console.log("Hello, friend!"); 
}
hello(); //output: Hello, friend! 
// console.log(hello); // output: Function: Hello
console.log(hello()); //Output: Hello, friend! Undefined (bc we are NOT returning anything)

// CHALLENGE
// Create a function that, when invoked, lists out the number 1-10 in the console. 
function count (){
    for(let i = 1; i <=10; i++){
        console.log(i);
    }}

    count();

// PARAMETERS 
// Parameters are place holders (or empty buckets) for data (our values) that we can pass into our function when we "invoke" it. 

/* 
SYNTAX

function name(parameter) {
    logic
}

name(argument);    //argument: data we are passing into our function(empty bucket)
*/

function taylor(pizza) {
 console.log(`Taylor loves ${pizza}`);
}
taylor("veggie lover's pizza"); //output: Taylor loves veggie lovers pizza

// CHALLENGE
// Write a function that takes NOT one BUT TWO parameters!
/*
    - first parameter is for a firstName,
    - second parameter is for a lastName,
    - Have them come together in a variable of fullName (inside the function).
    - console.log("Hello, friend! Is your name, <the name>") 
    - call/invoke the function!!!
*/

function fullName(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`;
    console.log(`Hello, friend! Is your name, ${fullName}?`);
}
fullName("Kristen" , "Kordesh")

// ARROW FUNCTIONS 
// Another way of writing ot our functions! 
// There are going to be two ways of writing them: Concise Body and Block Body 
// NOTE: Concise body is for simpler logic (You can write it out on one line) and block body is for more complex logic (Have to be written using multiple lines)

/*
SYNTAX
(setting our function to a variable), Then our thique arrow to signify it is an arrow function )

(Block Body)
let name = () => {
    nested logic
}

NOTE: DO NOT GET HOISTED
*/

// CONCISE BODY 
let greetings = () => console.log("Hello there!");
// NOTE: Concise body returns things by default.  So NOT necessary to return with concise body. 

// BLOCK BODY 
let anotherFunction = () => {
    console.log("Hey there!");
};
//NOTE: Block body arrow functions must have a return in the body of the function to actually return something!
//NOTE: Block body is used for multiple lines of code of logic. 

//CONCISE VS BLOCK
let apples = (x) => console.log(`There are ${x} apples`)
apples(10);

let moreApples = (applesCount) => {
    console.log(`There are ${applesCount} apples`)
}
moreApples(100);

// RETURNS 
// It is a statement at the end of our function's execution and specifies a value to be returned to where we are calling our function.

/*
SYNTAX

let nameOfFunction = () => {
    return 'string'
}
nameOfFunction();  //We have our keyword of return -which is bringing our data ('string') out of our function. 
*/ 

let plant = () => {
    return "flower"; //This return keyword is throwing back our value of 'flower' to where we are invoking our function.
};

let myPlant = plant(); //actually reads as let myPlant = 'flower'
console.log(myPlant);




let addNumbers = (num1, num2) => {
    return num1 + num2; //If we take out the return keyword, we get an output of undefined. BECAUSE we arent getting anything back where we are calling our function. 
}
console.log(addNumbers(2, 2));