// Javascript filter function

var persons = [  //<- var persons = array[]
    {name: "Günther", age: 22}, //<- is an object(in this case a person) with 2 properties -> name and age
    {name: "Nadine", age: 32},  //<- is an object(in this case a person) with 2 properties -> name and age
    {name: "Lars", age: 16}     //<- is an object(in this case a person) with 2 properties -> name and age
];

var adults = persons.filter(person => person.age >= 18 && person.age < 100)  //VariableNames.filter -> (filterFunction) | VariableName.property + ArithmeticOperator + DataType
console.log(adults)                                                          //Filter method(adults) is used to filter out every adult person (in this case if age property is 18 or above)

/*
var numbers = [1, 2, 3, 4, 5, 6];

var evenNumbers = numbers.filter(number => number % 2 == 0);  //number % 2 == 0 | if rest is == 0 -> even number (2,4,6...)
console.log(evenNumbers)                                      //                | if rest is ≠≠ 0 -> odd number (1,3,5...)
*/