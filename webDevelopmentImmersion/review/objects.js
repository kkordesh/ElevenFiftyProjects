/*
    OBJECTS

    - the Object class represents one of JavaScripts data types. It is used to store various keyed collections and more complex entities. 
*/

let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: "Pilot"
            },
            {
                episode: 2,
                episodeName: "Diversity Day"
            },
            {
                episode: 3,
                episodeName: "Health Care"
            },
            {
                episode: 4,
                episodeName: "The Alliance"
            },
            {
                episode: 5,
                episodeName: "Basketball"
            },
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log(netflix.season1.seasonInfo.episodeInfo[4].episodeName);

/*
    JSON OBJECTS
    
    - JSON stands for JavaScript Object Notation 
    - the JSON syntax is derived from JavaScript Object Notation syntax, but the JSON format is text only. 
    - JSON exists as a string - useful when we want to fetch data from a sever. JSON objects need to be converted to a native javascript object if we want to access the data

*/

/*

OBJECT BRACKET NOTATION/PROPERTY ACCESSORS

    -property accessors provide access to an object properties by using either dot notation or bracket notation

*/

let dog = {};

dog['name'] = 'Luna';
dog['breed'] = 'Siberian Husky';

console.log(dog);
console.log(dog.name, dog.breed);
console.log(dog['name'],dog['breed']);

//all keys inside of objects are strings although they are not wrapped in quotes
let test = Object.keys(dog); //whenever we use the Object.keys() method, it will take all the ID's from the object, and return them to us in an array. 
console.log(test);
console.log(typeof test[0]); // output: string

let testObj = {
    "Spaces Here": true,
    noSpaces: true
}

console.log(testObj["Spaces Here"]) // if you get data with keys with spaces, you need to use bracket notation instead of dot notation
// instructor note: whenever you run into an object that contains keys with spaces, you have to use object bracket notation instead of standard dot notation. 