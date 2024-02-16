// Javascript object to JSON and JSON to object with stringifyMethod and parseMethod | JSON -> JavaScript Object Notation

  //Serialization -> the process of converting | the state of an object => a form that can be preserved or transported
//Deserialization -> the process of converting | a form that can be preserved or transported => the state of an object

/*
var person = {
    name: "Detlef",
    age: 34,
    isStudent: false
};
*/

var jsonStr = JSON.stringify(person)  //Serialization from | object => JSON | with the stringifyMethod 
console.log(jsonStr)                  //Keyword "JSON" is an interface that contains the method ".stringify"

/*
----------
    ↑
Viceversa
    ↓
----------
*/

var json = '{"name":"Detlef","age":34,"isStudent":false}'  //<- change "" to ''  //Deserialization from | JSON => object | with the parseMethod  
                                                                                 //Keyword "JSON" is an interface that contains the method ".parse"
var person = JSON.parse(json)                                                    
person.age = 100  //<- property can be changed in the parseMethod but NOT in the stringifyMethod                         
console.log(person)            

//JSON.stringify -> converts the parameter value into a JSON string => Serialization
    //JSON.parse -> independently reconstructs a JavaScript value from the passed JSON string => Deserialization