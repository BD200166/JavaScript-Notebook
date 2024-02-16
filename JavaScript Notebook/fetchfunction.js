// Javascript fetch function

fetch('put API here', {  //Keyword "fetch" allows you to communicate with a web API | The fetch function can be used to access a URL and execute an http request
    method: "POST",  //<- http-POST requests are there to allow you to create resources on a web server
    body: JSON.stringify({  //JSON.stringify -> converts the parameter value (in this case "id" and "description") into a JSON string
        id: 5,
        description: "learn javascript"  //Process: package (body code block) -> translated into JSON string (id: 5, description: "learn javascript") -> send as POST request to -> given API
    })
})                                   //The process is asynchronous, keyword ".then" is needed here due to undefined time you have to wait
.then(response => response.json())  //Send request => get response => convert response into json | chain another ".then" after due to undefined time you have to wait
.then(data => console.log(data))  //data recieved => given back through the console.log
.catch(err => console.log(err))  //catches any errors that could occur and ensures that the program is terminated correctly