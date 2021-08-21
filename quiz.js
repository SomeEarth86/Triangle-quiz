const formAccess = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers");
const msgDisplay = document.querySelector(".msgdisplay");

const answerArray = ["90°","right angled","one right angle"];

submitBtn.addEventListener("click", evaluateMarks);

function evaluateMarks(){
    let index = 0;
    let score = 0;

    const formSheet = new FormData(formAccess);
    for(let value of formSheet.values()){
        console.log(value);
    }
}