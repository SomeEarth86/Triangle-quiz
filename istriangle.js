const angleInp = document.querySelectorAll(".angleinput");
const istrianglebtn = document.querySelector("#istriangle-btn");
const outputMsg = document.querySelector("#output-msg");


istrianglebtn.addEventListener("click", isTriangleorNot);

function isTriangleorNot() {

    if (  (angleInp[0].value > 0)  && (angleInp[1].value > 0) && (angleInp[2].value > 0)) {
        const sum = Number(angleInp[0].value) + Number(angleInp[1].value) + Number(angleInp[2].value);

        if (sum === 180) {
            showMessage("Yay, it forms a triangle");
        } else {
            showMessage("It does not form Triangle");
        }

    } else {
        showMessage(" Plz enter valid i/p ");
    }
}

function showMessage(msg) {
    outputMsg.innerText = msg;
}