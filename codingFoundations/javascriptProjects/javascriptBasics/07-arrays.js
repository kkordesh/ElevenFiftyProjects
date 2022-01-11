// Arrays
// Arrays are containers that hold lists of items 
// denoted by []  (square brackets)
// can hold multiple data types. Useful for listing things out (like everyone's names in a room)

//              0       1           2
let list = ['orange', 'banana', 'oreos']
console.log(list);
console.log(list[1]); //to get to banana 
console.log(typeof list[1]); //string
console.log(typeof list); //object


let names = ['Sage', 'Elon', 'Rosemary', 'Kaysen', 22, true, ['Ian', 'Alice', 'Aaron']];

console.log(names[2]); //Rosemary
console.log(names[0]); //Sage

//CHALLENGE: print out the name 'aaron' from the names array

console.log(names[6][2]); //6 is where the second array is. Aaron is at the second index. 
//could also do let temp = [6];, then run console.log(temp[2]);

//.toString()
// toString method will turn all elements in an array into a string
const array = [10, 'student', 'cake', -78, 'zebra'];
console.log(array); // [10, 'student', 'cake', -78, 'zebra' ]
console.log(array.toString()); // 10,student,cake,-78,zebra
console.log(typeof array.toString()); //string


//.length
// tells us the length of an array (how many things are in it)
const array = [10, 'student', 'cake', -78, 'zebra'];
console.log(array.length); // 5


// .shift()
// the shift method removes the first element from an array and returns it (puts it at the end).
// this method changes the length of an array. 
//only ever works on the first item
const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];
//1
console.log('Before:', foods)
//2
const firstObject = foods.shift();
//3
console.log('After:', foods);
//4
console.log('Shifted items:', firstObject);

/*
1 => In the before, we see the entire array as we created it
2 => We call the .shift() method and remove the first item
3 => In the after, we see the array is missing what was the first item in the before
4 => We see the previous first item from before is now in a variable. 
*/


//.unshift()
// unshift will add a value at the beginning of an array
const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];
console.log('Before:', foods);
foods.unshift({ name: 'popcorn', price: 20000 });
console.log('After:', foods);

//.pop()
// remove the last item in an array and return the removed value. 
const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];

console.log('Before:', foods);
const lastObject = foods.pop();
console.log('After:', foods);
console.log('Popped Item:', lastObject);

//.push
// add item to the end of an array

const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];

console.log('Before:', foods);
foods.push({ name: 'avocado', price: -50})
console.log('After:', foods);

//.reverse()
// reverses the order of the array
const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];
console.log(foods.reverse());

//.slice()
// allows us to grab a specific section of our array
const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];
console.log(foods.slice(2)); //gives array starting at whatever index we put in the parentheses 
console.log(foods.slice(2,3)); // the array starting from index 2, ending before index 4. 


// .splice()
// remove or replace items in an array starting at a certain position. 
const months = ['Jan', 'Mar', 'Apr'];

// splice has 3 "parameters" or options to fill in
// 1: the index to start at 
// 2: the number of items to remove
// 3rd and up: the new items to add

months.splice(1, 0, 'Feb');
// start at index 1, dont want to delete anything so put a 0, enter what you want 'Feb'
console.log(months);

//what if i decided i wanted to spell out the entire name of march and april?
//so i want to remove two things and replace them
months.splice(2, 2, 'March', 'April');
console.log(months);

// .join
// this will combine each item in the array into a string
const greetings = ['Hi', 'Hello', 'Welcome', 'Howdy'];
console.log(greetings.toString());
console.log(greetings.join());
//these two things look the same. If we do not give the join method a parameter, it will look the same as the toString. But we CAN give the join method a paramenter.
console.log(greetings.join(' ! and ')); // Hi ! and Hello ! and Welcome ! and Howdy
console.log(greetings.join(' how are you doing? ')); // Hi how are you doing? Hello how are you doing? 



// .some()
// this method checks the array for a condition and returns true or false if the item in the array meets that condition

const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];

const hasBeef = foods.some((food) => 
{return food.name === 'beef' // if  i switched beef with pasta, we'd get false
})

console.log(hasBeef); // true!




// .includes()
// includes method checks to see if an array includes a certain value or object, then returns true or false. 

const nums = [1,2,3,4,5]

const includesThree = nums.includes(3)
console.log(includesThree); // true

const includesTen = nums.includes(10)
console.log(includesTen); // false

// .every()
// The every method checks the array for a condition and returns true or false, like the some method, but instead checks each individual value instead of the whole array.

const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];

const isExpensive = foods.every((food) => {
    return food.price <= 1000
})

console.log(isExpensive)

// .find()
// allows you to find a single item in an array

const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];

const foundFood = foods.find((item) =>{
    return item.name === 'mint'
})

console.log(foundFood);

// .filter()
// The filter method allows us to go through an array and return 'filter' parameters that meet or don't meet a specific condition. 

const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];

const filteredPrice = foods.filter((food) => {
    return food.price <= 100
})

console.log(filteredPrice);

const filteredNames =foods.filter((food) =>{
    return food.name.startsWith('b')
})
console.log(filteredNames); //output: bread, beef, bell pepper

// .sort()
// The sort method sorts the items in an array. 
// The sort order can be either ascending (top to bottom) or descending (bottom to top), and either alphabetical or numeric
// By default the sort order will go as follows: ascending alphabetical order, or top to bottom and a-z.
// The sort method can also take in a 'compare' function which indicates if you would like ascending or descending order. 
let shoppingList = ['celery', 'limes', 'lemons', 'grenadine', 'oranges']

console.log(shoppingList.sort());


let costs = [3, 2, 13, 4]

console.log(costs.sort((a, b) => b - a)); //putting it in descending order. end values going before beginning values.
console.log(costs.sort((a, b) => a - b)); // ascending order


// .forEach()
// The for each method goes through every item in the array and applies whatever is in the body of the function 


const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];

let newFoods = []

foods.forEach((food) => {
    newFoods.push(food.name)
})

console.log(newFoods)



// .reduce()
//. The reduce method is a bit more confusing than the others, but incredibly useful!
// It executes a function for each specified value in an array, and returns a single value. 

const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];

const total = foods.reduce((endTotal, food) => {
    console.log(endTotal)
    return food.price + endTotal
}, 0)
console.log(total)


// .map()
// The map method allows you to take one array and convert it into a new array 
// That is populated with the results of the function it passed through 


const foods = [
    { name: 'bread', price: 100 },
    { name: 'beef', price: 100 },
    { name: 'mint', price: 10 },
    { name: 'shrimp', price: 5 },
    { name: 'ketchup', price: 500 },
    { name: 'bell pepper', price: 50 },
];

const foodNames = foods.map((food) => {
    return food.name
});
console.log(foodNames);

// .findIndex()
// The findIndex method will search the array for a specific element, and return its first index. 
// If an element is not found, it will return -1

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log(beasts.findIndex((beast) => 
    beast.startsWith('b')
)) // gives back: 1


// .indexOf()
// The indexOf method will search the array for a specific element and returns the index. 
// and return -1 if o item matches the specified element. 

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

console.log(beasts.indexOf('camel')); //2

console.log(beasts.indexOf('bison')) 