// Javascript loops

var colors = ["red","green","blue"]  //Loops are often used in collections of objects/datasets
                                     //Loops are used when you want to use code over and over again

//For-loop -> var i = 0; (Counter variable is initialized, default value is 0) | i < colors.length; (Condition is set) | i += 1 (Action is defined)
for(var i = 0; i < colors.length; i += 1){
    console.log(colors[i])
}

//For-of-loop -> var color (new var) | of colors (global var) -> New var is defined that refers to given global var, not recommended if you have to work with the index
for(var color of colors){
    console.log(color)
}

//While-loop -> Counter variable is defined outside the loop, the condition is set at the beginning and setting an action is mandatory so that the loop can terminate 
var i = 0;
while(i < 5){
    console.log(i)
    i += 1
}

//Do-While-loop -> Counter variable is defined outside the loop, code block is always executed, used when the loop code must be used AT LEAST once -> terminates with while condition
var i = 0;
do {
    console.log(i)
    i += 1
} while (i < 5)