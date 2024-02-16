// Javascript arrow function

var multiply = (a,b) =>{  //Multiple lines -> hence curly brackets
    var result = a * b;
    return result;        //Multi line/Code block -> requires keyword "return variable name" to give back a result 
}

console.log(multiply(3,3))

/*
var square = x => x * x; | x => x * x; filter within an array as a kind of expression
-----------------------
x (we take the parameter) => x * x; (code block the parameter is used in) -> result is returned even without the keyword "return"
-----------------------
console.log(square(49))
/*

/*
var add = (a,b) => a + b; | If there are 2 or more parameters, a bracket must be used

console.log(add(1,2))
*/

/*
var greet = () => console.log("Hello World");

greet();
---------------------------
Both serve the same purpose
---------------------------
function greet (){
    console.log("Hello World")
}
*/