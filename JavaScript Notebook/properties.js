// Javascript properties

var person = {  //<- var person is an object
    name: "Günther",  //<- name is a property (in this case a string)
    age: 25,          //<- age is a property (in this case a number)
    greet: function(){  //<- greet is a function that belongs to the object var person object
        console.log("Hi, I am " + this.name)  //Keyword "this" is needed to refer to the object instance (otherwise the computer won't know which object or property is refered to)
    }
}

person.greet();  //Calls the function "greet" from object "person"

delete person.age;  //Keyword "delete" can be used to delete properties (in this case the age propety has been excluded from the result)

console.log(person);  //Calls the object with all its properties and functions

person.age = 35  //Age property value has been changed from 25 -> 35
person.name = "Olaf"  //Name property value has been changed from "Günther" -> "Olaf"

console.log(person.name);  //Common method to access the property
console.log(person["name"]);  //Alternative method to access the property