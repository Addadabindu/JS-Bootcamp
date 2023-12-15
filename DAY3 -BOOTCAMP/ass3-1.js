const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let currentIndex = 0;
const nameDisplay = document.getElementById('name-display');

function displayCurrentName() {
    nameDisplay.textContent = names[currentIndex];
}

function showNextName() {
    currentIndex = (currentIndex + 1) % names.length;
    displayCurrentName();
}

function showPreviousName() {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    displayCurrentName();
}

document.getElementById('next-btn').addEventListener('click', showNextName);
document.getElementById('previous-btn').addEventListener('click', showPreviousName);
window.addEventListener('load', displayCurrentName);
