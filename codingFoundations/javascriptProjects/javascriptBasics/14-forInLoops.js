let student = {
    name: 'Rick',
    awesome: true,
    degree: 'Javascript',
    week: 2
};

for (item in student){
    console.log(item); //by itself gives: name, awesome, degree, week
    console.log(student[item]);
}

const catArray = ['tabby', 'british shorthair', 'burmese', 'rag doll'];
for (cat in catArray) {
    console.log(cat); // by itself gives 0, 1, 2, 3 bc (0= 'tabby' 1 = 'british shorthair' etc)
    console.log(catArray[cat]);
}

// Challenge: write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
//hint: remember a string is technically an array to JS

let myName = ['s', 't', 'e', 'v', 'e']
for (letter in myName){
    console.log
}

let myName = "kristen";
let casedName;
for(item in myName) {
    console.log(item, ':', myName[item]); //gives each letter
    if (item == 0) {
        casedName = myName[item].toUpperCase();
    } else {
       casedName= casedName + myName[item].toLowerCase();
    }
}

console.log(casedName);