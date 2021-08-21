const baseOfTriangle = document.querySelector(".base");
const heightOfTriangle = document.querySelector(".height");

const calculateAreaBtn = document.querySelector("#area-btn");
const msgDisplay = document.querySelector("#output-msg");

calculateAreaBtn.addEventListener("click", calculateArea);

function calculateArea() {
    if (baseOfTriangle.value && heightOfTriangle.value) {
        const area = 0.5 * Number(baseOfTriangle.value) * Number(heightOfTriangle.value);
        msgDisplay.innerText = " The area of triangle is " + area;
    } else {
        msgDisplay.innerText = " Enter the valid I/P to calculate area";
        z
    }
}