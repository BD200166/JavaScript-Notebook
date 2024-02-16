// Javascript map function

var persons = [  //<- var persons = array[]
    {name: "Günther", age: 22}, //<- is an object(in this case a person) with 2 properties -> name and age
    {name: "Nadine", age: 32},  //<- is an object(in this case a person) with 2 properties -> name and age
    {name: "Lars", age: 16}     //<- is an object(in this case a person) with 2 properties -> name and age
];

var names = persons  //Different functions/methods can be linked together
    .filter(person => person.age > 22)  //First the indexes of the array are being filtered out with ".filter" (in this case every index of the property "age" that is beneath the value 22)
    .map(person => person.name)         //Second the indexes of the array are being transformed to give back a new array (in this case an array that only gives back the property "name" of array)
console.log(names)                      //Third the result that is returned is every index/value that fulfills every condition of the linked functions/methods that has been given

/*
var ages = persons.map(person => person.age)  //Only property "age" is returned as result, property "name" is not included due to not being defined in the mapFunction and arrowFunction
console.log(ages)

var names = persons.map(person => person.name)  //Only property "name" is returned as result, property "age" is not included due to not being defined in the mapFunction and arrowFunction
console.log(names)
*/

/*
var numbers = [1, 2, 3, 4, 5];  //MapFunction/MapMethod is used to transform data structures

var doubled = numbers.map(num => num * 2)  //".map" initializes the mapFunction and gives back a new array instead of the existing/old one
console.log(doubled)                       //ArrowFunction is used to create the conditions for the transformation (in this case double every index of the array)
*/