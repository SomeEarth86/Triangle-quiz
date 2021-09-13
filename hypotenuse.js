const side1 = document.querySelector(".side1");
const side2 = document.querySelector(".side2");
const calcHypoBtn = document.querySelector("#hypotenuse-btn");
const resultDisplay = document.querySelector("#output-msg");

calcHypoBtn.addEventListener("click", calcHypotenuse);

function calcHypotenuse() {

    if (side1.value>0 && side2.value > 0) {
        const sum = side1.value ** 2 + side2.value ** 2;
        // console.log(sum);
        const hypo = Math.sqrt(sum);
        resultDisplay.innerText = " The hypotenuse is :" + hypo;
    }
    else {
        resultDisplay.innerText = " Enter the valid side of the triangle";
    }

}