
const questions = [
    {
        question : "which is the largest animal in the world     ?",
        answer : [
            {text : "shark", correct : false},
            {text : "Blue Whale", correct : true},
            {text : "Elephant", correct : false},
            {text : "Giraffe", correct : false},
        ]
    },
    {
        question : "which is the largest bird in the world     ?",
        answer : [
            {text : "Sparrow", correct : false},
            {text : "Crow", correct : false},
            {text : "Ostrich", correct : true},
            {text : "Maacow", correct : false},
        ]
    },
    {
        question : "which is the smallest continent in the world     ?",
        answer : [
            {text : "Australia", correct : true},
            {text : "Asia", correct : false},
            {text : "Artic", correct : false},
            {text : "Africa", correct : false},
        ]
    },
    {
        question : "which is the super Power in the World    ?",
        answer : [
            {text : "Russia", correct : false},
            {text : "China", correct : false},
            {text : "India", correct : false},
            {text : "America", correct : true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0 ;
let score = 0 ;

function startQuiz(){
    let currentQuestionIndex = 0 ;
    let score = 0 ;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
 let currentQuestion = questions[currentQuestionIndex];
 let questionNo = currentQuestionIndex + 1;
 questionElement.innerHTML = questionNo + " . " + currentQuestion.question




}