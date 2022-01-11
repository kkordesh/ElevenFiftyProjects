// for in = objects, for of = arrays 

let student = {
    name: 'Jeremy',
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

for (item of student) {
    console.log(item);
} //doesnt work


let dogArray = ['Plott Hound', 'Belgian Shepherd', 'Husky', 'Lab', 'Poodle'];

for (breed of dogArray){
    console.log(breed);
}

let myName= 'Kristen'
for (letter of myName) {
    console.log(letter);
}

//challenge: print out each superhero's name using a for  loop, for in loop, and for of loop.
const superheroes = ['Spiderman', 'Batman', 'Wonderwoman', 'Zantanna', 'Captain Boomerang', 'Omniman'];
//for loop 
for (let i = 0; i <= 5; i++){
    console.log(superheroes[i]);
}
// for in loop
const superheroes = ['Spiderman', 'Batman', 'Wonderwoman', 'Zantanna', 'Captain Boomerang', 'Omniman'];
for (hero in superheroes){
    console.log(hero);
    console.log(superheroes[hero]);
}
// for of loop
const superheroes = ['Spiderman', 'Batman', 'Wonderwoman', 'Zantanna', 'Captain Boomerang', 'Omniman'];
for (hero of superheroes){
    console.log(hero);
}

//i did it!!! (: 
