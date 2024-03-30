const ERROR = "Error!";

const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

function del() {
    if (pantalla.textContent.length === 1 || pantalla.textContent === ERROR) {
        pantalla.textContent = "0";
    } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
    }
}

function clear() {
    pantalla.textContent = "0";
}

function addValue() {
    const value = this.textContent;

    if (pantalla.textContent === "0" || pantalla.textContent === ERROR) {
        pantalla.textContent = value;
    } else {
        pantalla.textContent += value;
    }
}

function calculate() {
    try {
        const result = Math.round(eval(pantalla.textContent) * 100000) / 100000;
        pantalla.textContent = result.toString();
    } catch (error) {
        pantalla.textContent = ERROR;
    }
}

botones.forEach(function (button) {
    let buttonFunction;

    switch (button.id) {
        case "c":
            buttonFunction = clear;
            break;
        case "borrar":
            buttonFunction = del;
            break;
        case "igual":
            buttonFunction = calculate;
            break;
        default:
            buttonFunction = addValue;
    }

    button.addEventListener("click", buttonFunction)
})