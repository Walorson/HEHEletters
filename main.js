const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.querySelector("button");
const checkboxLabel = document.getElementById("checkbox");
let sequenceMode = 0;
// Mode 0: First letter is Big, Mode 1: First letter is small.

const generateText = () => {
    output.textContent = "";
    let text = input.value;

    for(let i = 0; i < text.length; i++) {
        if(i % 2 == sequenceMode) output.textContent  += text[i].toUpperCase();
        else output.textContent += text[i].toLowerCase();
    }
}

button.addEventListener("click",generateText)
input.addEventListener("keypress",(e) => {
    if(e.key == "Enter") generateText();
});

const checkbox = checkboxLabel.querySelector("input");
checkboxLabel.addEventListener("click",() => {
    if(checkbox.checked) sequenceMode = 1;
    else sequenceMode = 0;

    generateText();
});