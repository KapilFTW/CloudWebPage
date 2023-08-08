const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";
let shouldClearDisplay = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        
        if (buttonText === "=") {
            try {
                display.value = eval(currentInput);
            } catch (error) {
                display.value = "Error";
            }
            shouldClearDisplay = true;
        } else if (buttonText === "C") {
            currentInput = "";
            display.value = "";
        } else {
            if (shouldClearDisplay) {
                currentInput = "";
                shouldClearDisplay = false;
            }
            currentInput += buttonText;
            display.value = currentInput;
        }
    });
});


const backspaceButton = document.querySelector(".backspace-button");

backspaceButton.addEventListener("click", () => {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
});

// Add your other calculator logic here...
