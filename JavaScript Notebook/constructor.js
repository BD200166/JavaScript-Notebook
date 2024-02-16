// Javascript constructor

class Person {  //A class (in this case the class instance "Person") is a complex DataType ≠ primitive DataType (boolean, integer, double etc.) 

    constructor(name, age){  //Keyword "constructor" creates a constructor with parameters -> () | in this case the parameters "name" and "age"
        this.name = name;  //<- property "this.name" => parameter "name" represents a condition that is obligatory for the constructor
        this.age = age;  //<- property "this.age" => parameter "age" represents a condition that is obligatory for the constructor
    }

}

/*
Alternative method to the constructor (not as efficient)

newPerson.age = 35;
newPerson.name = "Günther";
*/

var newPerson = new Person("Günther", 35);  //<- represents an instance | Keyword "new" is used for the instantiation (reading or providing information)
console.log(newPerson)