let quizForm = document.querySelector("form");
let finishedScreen = document.querySelector(".finished");
let pointslabel = document.querySelector(".points-label");
let sendbutton = document.querySelector(".send-button");

sendbutton.addEventListener("click", handleform);

function handleform() {
    let points = 0;
    let answers = document.querySelectorAll("input:checked");
    for (let answer = 0; answer < answers.length; answer++) {
        points += parseInt(answers[answer].value, 10);

    }
    pointslabel.innerHTML = points;
    quizForm.classList.toggle("hidden");
    finishedScreen.classList.toggle("hidden");      
}

