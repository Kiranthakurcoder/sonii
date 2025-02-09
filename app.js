// Dark and Pink mode button creation
const modeToggle = document.createElement("button");
modeToggle.textContent = "Toggle Dark/Pink Mode";
modeToggle.style.padding = "10px 20px";
modeToggle.style.margin = "10px";
modeToggle.style.backgroundColor = "#ff6699";
modeToggle.style.color = "white";
modeToggle.style.border = "none";
modeToggle.style.borderRadius = "5px";
modeToggle.style.cursor = "pointer";

// Append button to the header
const header = document.querySelector("header");
header.appendChild(modeToggle);

// Initial mode state
let isDarkMode = false;

// Event listener for mode toggle
modeToggle.addEventListener("click", () => {
    if (isDarkMode) {

         // Switch to Pink Mode
    document.body.style.backgroundColor = "#ffe6f0";
    document.body.style.color = "black";
    modeToggle.style.backgroundColor = "#ff6699";
    modeToggle.style.color = "white";
    header.style.backgroundColor = "#ff6699";
    document.querySelectorAll("section").forEach(section => {
        section.style.backgroundColor = "#ffffff";
        section.style.color = "#333";
        // // Switch to Pink Mode
        // document.body.style.backgroundColor = "#ffe6f0";
        // document.body.style.color = "white";
        // modeToggle.style.backgroundColor = "white";
        // modeToggle.style.color = "black";
        // header.style.backgroundColor = "#ff6699";
        // document.querySelectorAll("section").forEach(section => {
        //     section.style.backgroundColor = "white";
        });
    } else {
        // Switch to Dark Mode
        document.body.style.backgroundColor = "#333";
        document.body.style.color = "white";
        modeToggle.style.backgroundColor = "#555";
        modeToggle.style.color = "white";
        header.style.backgroundColor = "#444";
        document.querySelectorAll("section").forEach(section => {
            section.style.backgroundColor = "#555";
        });
    }
    isDarkMode = !isDarkMode;
});


const currentIntakeEl = document.getElementById('current-intake');
const targetIntakeEl = document.getElementById('target-intake');
const remainingCaloriesEl = document.getElementById('remaining-calories');
const deficitEl = document.getElementById('deficit');
const calorieInput = document.getElementById('calorie-input');
const updateButton = document.getElementById('update-calorie');

let currentIntake = 0;
const targetIntake = 1200;
const dailyDeficit = 500;

updateButton.addEventListener('click', () => {
  const calorieValue = parseFloat(calorieInput.value);

  if (!isNaN(calorieValue) && calorieValue > 0) {
    currentIntake += calorieValue;
    const remainingCalories = targetIntake - currentIntake;

    currentIntakeEl.textContent = currentIntake;
    remainingCaloriesEl.textContent = remainingCalories > 0 ? remainingCalories : 0;

    if (remainingCalories < 0) {
      alert("You've exceeded your daily target calorie intake.");
    }

    calorieInput.value = '';
  } else {
    alert("Please enter a valid calorie amount.");
  }
});