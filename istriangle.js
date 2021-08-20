const angleInp = document.querySelectorAll(".angleinput");
const istrianglebtn = document.querySelector("#istriangle-btn");
const outputMsg = document.querySelector("#output-msg");


istrianglebtn.addEventListener("click", isTriangleorNot)

function isTriangleorNot() {

    if (angleInp[0].value && angleInp[1].value && angleInp[2].value) {
        const sum = Number(angleInp[0].value) + Number(angleInp[1].value) + Number(angleInp[2].value);

        if (sum === 180) {
            showMessage("Yay, it forms a triangle");
        } else {
            showMessage("It does not form Triangle");
        }

    } else {
        showMessage(" Enter all 3 angles to check.");
    }
}

function showMessage(msg) {
    outputMsg.innerText = msg;
}