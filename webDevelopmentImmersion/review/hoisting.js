/*
    HOISTING

    -hoisting was though up as a general way of thinking about how our code is compiled and executed
        - there are two general phases that happen when we run our code: 
            -creation phase: any variable (var, let const) or function iin our code are stored to memory 
            -execution phase: values are assigned to the variables and functions that were stored away to memory during the creation phase
    
    -When our code is read and ran, the file is read top to bottom, line by line - in sequential order. 
*/


let num = 5;
console.log(num);  //output: 5 


// FUNCTION DECLARATION

function sayHi(){
    console.log('Hi!');
    let a = 'hello';
    console.log(a);
}
sayHi();  //output: Hi! hello... function declarations can be invoked above or below the code bc the compiler knows the function exists and has stored it away to memory

// sayHi();

// FUNCTION EXPRESSION


let func = function (){
    console.log('Will I run?');
}
func(); //has to be invoked below code

