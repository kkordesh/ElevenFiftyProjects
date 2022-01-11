// SCOPE
// Scope is how our code can keep track of the variables in our document. 
// There is global (outer) scope and local scope (inner)
// global (think planet earth) - variables outside of our functions, conditionals, loops, etc. 
// local (your city, town) - variables inside our functions, conditions, loops, etc. 

let x = 12;  // globally scoped. Think of our document as a whole. This variable only exists inside of our function. 

function scope() {
    let x = 33;
    console.log(x, "This is coming from line 11"); //output 33
}

scope();
console.log(x, "This is coming from line 15"); //output 12 


let y = 12; // This is globally scoped, so our whole document has this variable and it is accessible
function scope2() {
    y = 33; //re-initializing the variable of y to be 33 
    console.log(y); //output: 33
}

scope2();
console.log(y); //output: 33

//VAR VS LET
//We have three keywords for variables: var, let, const
//const is constant and cannot be re-initialized.
// var and let seem to operate the same. Functionality wise, they operate the same, but there are some differences. 
/*
    -var is scoped to the nearest function block
    -let is scoped to the nearest enclosing block. 
*/

var color = "blue";

function skyColor(){
    var color = "pink";
    if (1 == 1) {
        var color = "purple";
        console.log(color, 'This is coming from line 42'); //purple
    }
    console.log(color, "This is coming from line 44"); //purple. Scope bleeding is happening here. it is being overwritten because it goes to the nearest function block.
}

skyColor();
console.log(color); "this is coming from line 48"; //blue


// let 

let color = "blue"; //globally scoped

function skyColor() {
    let color = "pink";
    if(1 == 1) {
        let color = "purple"; //local to our conditional
        console.log(color); //purple
    }
    console.log(color); //pink
}
skyColor();
console.log(color); //blue
//NOTE: TLDR; Use let


// HOISTING
// JavaScript is read line by line (read top to bottom) and our compiler runs twice (This is performed in Milliseconds). In our first pass (hoisting is performed) our code is being interpreted (things are saved to memory). Then for our second pass the code finally runs (is executed.)

// First PASS: stores our variable declarations (stores our variable names to memory and reminds itself where those declarations are in our code). IT DOES NOT ASSIGN THEIR VALUES DURING THE FIRST PASS! (hoisting happens)

// second PASS: Assigns the values to our variables and executes any hoisted source code. 

// a variable that can be declared after it has been used. 

console.log(name);
let name = "Taylor"; // we get an error because we did not declare it before we referenced it

hoist();

function hoist() {
    console.log("I have been hoisted");
}

function petName(name) {
    console.log(`My cat's name is ${name}`)

}
petName("Connor")

// Functions with hoisting
petName("Connor")
function petName(name) {
    console.log( `My cat's name is ${name}`)
}
    //NOTE: Javascript only hoists declarations, not initializations. 
    console.log(hello);
    hello = "hi"; // OutputL error because we are initializing it after we use the variable
//TLDR: Declare your variables and functions before you reference them. Best to avoid hoisting. 