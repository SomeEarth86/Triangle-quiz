const formAccess = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-answers");
const msgDisplay = document.querySelector(".msgdisplay");

const answerArray = ["90°","right angled","one right angle","12 16 20","Equilateral Triangle","85°","30°","a + b + c","45°" ];

submitBtn.addEventListener("click", evaluateMarks);

function evaluateMarks(){
    let index = 0;
    let score = 0;

    const formSheet = new FormData(formAccess);
    for(let value of formSheet.values()){
        if(answerArray[index] === value) {
            score++;
        }
        index++;
    }
    
    msgDisplay.innerText = "Your Final score is " + score;
}