// a variable is a named container for storing data values

let a = 2;

let     b       =       1;
(1)     (2)     (3)     (4)
/*
1. JavaScript keyword to tell our code we are making a variable.
2. The name of the variable. This is how we will refer to the value stored within the container.
3. Assignment operator: Gives the variable a value.
4. The initial value of the variable.
*/

// Variable Declarations
// The declaration of a variable is the left side of the assignment operator, this is where we create the variable "conatiner".

// let - the newer way to make variables 
let x;
// var - the older way to make variables - DO NOT USE
var y;
// const - a variable that cannot change - it is constant 
const z;

// Variable Initialization 
// Initialization is to the right side of the assignment operator (=), and is where we set the value for the variable.
let initial = 10;
//            ^ Initialization  - giving a variable a value
const initial_const = 22; // initial_const will ALWAYS refer to the number 22, since that was the initialized value 

// EXAMPLES:
let x; 
console.log('Declaration:', x);
// Declaration: <value of x>. Console log types it out. 
x = 10;
console.log('initialization', x);

x = 33;
console.log('Re-Initialization:', x);

let greeting = 'Hello';
const myName = 'Kristen';
console.log(greeting, myName);

greeting = 'New greeting';
console.log(greeting, myName);

//myName = 'New Name'; // TypeError: Assignment to constant varibale 
// we cannot change the value of a const after we initialize it 
console.log(greeting, myName);