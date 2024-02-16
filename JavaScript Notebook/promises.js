// Javascript promises

var myPromise = new Promise((resolve, reject) => {  //Keyword "Promise" creates a function with 2 arguments -> resolve (successful) and reject (not successful)

    var success = true;  //The function is not synchronous due to undefined time you have to wait

    if(success){
        resolve("The operation was successful.")  //<- Process/Operation was successful
    } else {
        reject("The operation failed.")  //<- Process/Operation was not successful
    }

})

myPromise  //<- myPromise call is mandatory for the function to terminate
.then((message) => console.log(message))  //Keyword ".then" returns a result if the process was successful
.catch((message) => console.log(message)) //Keyword ".catch" returns a result if the process was not successful
//.finally -> Keyword ".finally" ensures that a certain code is executed in any case