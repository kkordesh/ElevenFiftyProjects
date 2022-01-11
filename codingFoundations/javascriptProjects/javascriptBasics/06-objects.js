// OBJECTS
// Objects use multiple data types that consist of key/value pairs. Most data is formatted in a similar way to objects.
//Objects are denoted by curly brackets {}... arrays are denoted by brackets []
/*

Object Syntax

let variableName = {
    key: value,
    key: value, 
    key: value
}

*/
let name = {
 firstName: "Kristen", 
 lastName: "Kordesh"
};

let netflix = {
    name: "The Witcher",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 8,
            episodeInfo: [
                { episode: 1, episodeName: "The End's Beginning"},
                { episode: 2, episodeName: "Four Marks"}
            ]
        }
    }
};

console.log("All data: ", netflix); // Output: an object with all the data from above.
console.log(netflix.name); //output: the Witcher DOT NOTATION
console.log("Season 1: ", netflix.seasonInfo.season1); // output: all the season 1 info. We can continue following the relative path to get to the info we want in an object.
console.log("First Episode: ", netflix.seasonInfo.season1.episodeInfo[0].episodeName); //0 = first item in array. output: The End's Beginning
// BRACKET NOTATION - Cab be used in tandem with DOT NOTATION

// ASSIGNING NEW KEYS TO OBJECTS USING DOT NOTATION
// SYNTAX: objectName.keyName.nameOfNewKey = value;
netflix.seasonInfo.totalSeasons = 8;
console.log(netflix.seasonInfo);

//CHALLENGE: 
// Add a new object called newEpisode in our object of netflix in episodeInfo. The new object is going to have an episode of 3 and episode Name of "Betrayer Moon" to the episode Info array
// (Hint: look up the .push() method in google)

//PUSH METHOD ADDS A NEW ITEM TO AN ARRAY (appends it to the end of our list)
let NewEpisode = netflix.seasonInfo.season1.episodeInfo.push({episode: 3, episodeName: "Betrayer Moon",});
console.log(netflix.seasonInfo.season1.episodeInfo);

// JSON - Javascript Object Notation
// Used to send data back and forth between servers and clients. Looks and acts like objects. We can use dot and bracket notation to access information within those "objects.".
// Note: This is something for later. We will get to this once we get to APIs

let spaceJam = {
    toonSquad: {
        human: "Michael Jordan",
        human2: "Bill Murray",
        rabbit: "Bugs Bunny",
        rabbit2: "Lola Bunny",
        duck: "Daffy Duck",
    },
    monstars: {
        0: "Bupkus",
        1: "Bang",
        2: "Nawt",
        3: "Pound",
    },
    nbaPlayers: {
        phoenixSuns: "Charles Barkley",
        newJerseyNets: "Shawn Bradley",
        newYorkNicks: "Patrick Ewing",
    },
};

// Object.keys - It is a method that returns an array of an objects own keys (properties) names.
console.log(Object.keys(spaceJam.toonSquad)); 
console.log(Object.keys(spaceJam.toonSquad.duck)); //Output is the indices of the string "Daffy Duck". (aka, '0', '1', '2', etc.)
 
//Object.values - is a method that returns an array of given objects own values
console.log(Object.values(spaceJam.toonSquad)); //Output is the values in toonSquad in the array. 