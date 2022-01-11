// STRING PROPERTIES 
// length property - determines the length of string. 
let myName = "Kristen";
console.log(myName.length); //Output: 7 because there are 7 characters in my string. NOTE: the length property also accounts for spaces and punctuation in your strings.

// STRING METHODS
// NOTE: Methods are tools that can help us manipulate our data. 
// NOTE: METHODS VS PROPERTIES 
/* Methods have parentheses following them, properties do NOT. 
 .methodName() and .propertyName */


// toUpperCase method
let myNameIs = "Kristen";
console.log(myNameIs.toUpperCase()); // Output: Kristen 

// includes method - this method checks if a certain string is included inside of your string. 
let home = "My home is Indiana";
console.log(home.includes("Indiana")); // is true, because Indiana exists in the string.
console.log(home.includes("indiana")); // false, there is no indiana in the string. Javascript is case-sensitive. 
// NOTE: includes method is NOT exclusive to strings.

// Challenge: Use google! This is open-ended. Research and use the split method to get an array back of seperate strings from the sentence I give you. 

let sent = "This sentence is going to be split into individual parts.";
console.log(sent.split(" ")); //seperates the words
//console.log(sent.split("")); //seperates the letters 
//console.log(sent.split("e")); //seperates the sentence up by e's, also takes out the e's. 