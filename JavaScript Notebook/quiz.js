var score = 0;                      //Individual variable names are written in lowercase -> variable names with two or more words are written in camelCase
var currentQuestionIndex = 0;       //Keyword "var" is the same as keyword "let"
                                    //In Javascript floatnumbers(1.2, 1.3, 1.4...) and integers(0,1,2...) are summed up as "numbers"
/*                                    
var question = {                                   
    question: "Welche Farbe hat eine Banane?",      //Question         |
    //Index     0      1      2      3              //QuestionIndex    | -> begins at 0 -> counting always start at 0 instead of 1 (in terms of programming)
    answers: ["Rot","Blau","Gelb","Grün"],          //Possible answers | -> Object with attributes and/or methods [in this case 3 attributes] also out of object "=" & in object ":" to set values
    correctAnswer: 3                                //Correct answers  |
}                                                   
*/                                          
var questions = [
    {
        question: "Welche Farbe hat eine Banane?",
        //Index     0      1      2      3
        answers: ["Rot","Blau","Gelb","Grün"],
        correctAnswer: 2
    },  //<- Commas are essential to distinguish different objects from one another
    {
        question: "Welche Marke passt nicht zu den anderen?",
        //Index        0       1      2      3
        answers: ["Mercedes","BMW","Audi","Adidas"],
        correctAnswer: 3
    },  //<- Commas are essential to distinguish different objects from one another
    {
        question: "Wie viele Flügel hat ein Adler?",
        //Index    0   1   2   3
        answers: ["7","2","1","5"],
        correctAnswer: 1
    }
]

function displayQuestion(){  //<- function is defined

    if(currentQuestionIndex >= questions.length){  //<- crucial for the program to terminate
        document.getElementById("quiz-container").hidden = true;  //content is hidden because "hidden = true"
        document.getElementById("result").hidden = false;  //content is not hidden because "hidden = false"
        document.getElementById("score").textContent = score;  
        return;
    }

    var question = questions[currentQuestionIndex];  //Global "var currentQuestionIndex" is needed here to keep the function dynamic

    document.getElementById("question").textContent = question.question  //document.getElementById("question") is used to address the id set in the index.html file
                                                                         //.textContent = question.question is used to display the textContent that the user will see
                                                                         //question.question -> question(addresses the object in "var questions").question(addresses the attribute in "var questions")
    var answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";  //<- empties the previous content

    question.answers.forEach((answer, index) => {  //forEachLoop dynamically creates buttons based on the number of answers         
        var answerButton = document.createElement("button")
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);  //answerButton.onclick = () triggers event => checkAnswer(index) -> the button gets its functionality
        answersDiv.appendChild(answerButton)
    })                                                                     
}
displayQuestion();  //<- function is called

function checkAnswer(userAnswer){
    var correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if(userAnswer == correctAnswer){
        score += 1;
    }
    
    //currentQuestionIndex += 1;
      nextQuestion();
    //displayQuestion();
}

function nextQuestion(){
    currentQuestionIndex += 1;
    displayQuestion();
}

/* 
    comments for index.html

<html>
    <header> | -> Keyword "header" <header></header> is the same as "head" <head></head>
        <title>JavaScript Quiz</title>
    </header>

    <body>
        <div id="quiz-container"> | -> Keyword "div" is a container -> needs an id="" to be addressed by the quiz.js file
            <h1 id="question"></h1> | -> Tag content <tag id="">TAG CONTENT</tag> is left blank and replaced with an id so that the javascript file can set it dynamically
            <div id="answers"></div> | Same as above
            <button id="next-button" onclick="nextQuestion()">Nächste Frage</button> | -> Same as above
        </div>

        <div id="result" hidden="true"> | -> Attribute "hidden" hides the result from the user
            <h1>Quiz beendet!</h1>
            <p>Deine Punktzahl:<span id="score"></span></p>
        </div>
    </body>

    <script src="quiz.js"></script> | -> Usually belongs in the footer or in the header, the important thing is that it is referenced at the right time
</html>
*/