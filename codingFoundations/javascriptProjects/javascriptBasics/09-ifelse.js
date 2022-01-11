let weather = 75
if(weather <  70) {
    console.log('Wear a jacket.')
} else {
    console.log('No jacket necessary today (: ')
}
// CHALLENGE 
/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'

Silver:
    If It is your name, console log 'Hello, my name is <name>'

Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

//bronze
let myName = 'Kristen'
if(myName === 'Kristen') {
    console.log(myName)
} else {
    console.log('Hello, what is your name?')
}

//silver
//concatenation
//console.log('Hello, my name is' + myName)
// string interpolation 
console.log(`Hello, my name is ${myName}`)

//gold
if(myName === 'Kristen') {
console.log(`Hello, my name is ${myName}`)}
else {
    console.log(`Hello, is your name ${myName}`)
}