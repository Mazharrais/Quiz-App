
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

    resetState();

 let currentQuestion = questions[currentQuestionIndex];
 let questionNo = currentQuestionIndex + 1;
 questionElement.innerHTML = questionNo + " . " + currentQuestion.question

  currentQuestion.answer.forEach(answer =>{
   const button = document.createElement("button");
   button.innerHTML = answer.text;
   button.classList.add("btn");
   answerButton.appendChild(button);
   if(answer.correct){
    button.dataset.correct = answer.correct;
   }
   button.addEventListener("click",selectAnswer)

  });


}

  function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
  }

 function selectAnswer(e){

    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    } else{
        selectBtn.classList.add("incorrect");
    }

     Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
     })

     nextButton.style.display = "block";

 }


  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
  }





 nextButton.addEventListener("click", ()=>{

  if(currentQuestionIndex < questions.length){
    handleNextButton();
  } else{
    startQuiz();
  }

 });






startQuiz();