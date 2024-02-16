// Javascript |Try|Catch|Throw| => used to always terminate the program correctly and controlled

/*
    Try => is used to execute the function/process
    Catch => is used to catch potential errors
    Throw =>
*/

function checkAgeForSignup(age) {  //<- Function "checkAgeForSignup" checks if a certain age has been reached

    if(age < 0){  //<- First condition (Is the input a valid age?)
        throw new Error("Please provide a valid age.")  //Keyword "Error" gives back an error as result
    }

    if(age < 18){  //<- Second condition (Does the input meet the minimum age?)
        throw new Error("Sorry, must be at least 18 years old.")  ////Keyword "Error" gives back an error as result
    }

    return "You are eligible to sign up!";  //<- Result returned if no errors occurred and the input met all conditions
}

try {  //Keyword "try" is used to test the input
    console.log(checkAgeForSignup(15))  //<- Executes the function input
} catch(error){  //Keyword "catch" grants access to the errors of the throw cases if they occur and catches them
    console.error("An error occurred: ", error.message)  //<- Returns an error based on the input  //Keyword "error.message" gives back error message based on input (first/second condition)
} finally {  //Keyword "finally" ensures that a certain code is executed in any case (successful or not successful)
    console.log("See you next time.")
}