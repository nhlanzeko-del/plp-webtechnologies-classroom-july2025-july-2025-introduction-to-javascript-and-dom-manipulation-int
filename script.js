/****************************
 * PART 1: Variables & Conditionals
 ****************************/
// Variable declarations
const numberResult = document.getElementById('numberResult');
const checkNumberBtn = document.getElementById('checkNumberBtn');

// Conditional example
checkNumberBtn.addEventListener('click', function() {
    // Generate random number between -10 and 10
    const randomNum = Math.floor(Math.random() * 21) - 10;
    let message;

    // Conditional checks
    if (randomNum > 0) {
        message = `${randomNum} is positive`;
    } else if (randomNum < 0) {
        message = `${randomNum} is negative`;
    } else {
        message = "The number is zero";
    }

    numberResult.textContent = message;
});

/****************************
 * PART 2: Custom Functions
 ****************************/
// Function 1: Calculate rectangle area
function calculateArea(width, height) {
    // Input validation
    if (typeof width !== 'number' || typeof height !== 'number') {
        return 'Please enter valid numbers';
    }
    if (width <= 0 || height <= 0) {
        return 'Dimensions must be positive numbers';
    }
    return width * height;
}

// Function 2: Format output message
function formatAreaMessage(area) {
    return `The area is: ${area} square units`;
}

// Using the functions
const calculateAreaBtn = document.getElementById('calculateAreaBtn');
const areaResult = document.getElementById('areaResult');

calculateAreaBtn.addEventListener('click', function() {
    const width = parseFloat(document.getElementById('rectangleWidth').value);
    const height = parseFloat(document.getElementById('rectangleHeight').value);
    
    const area = calculateArea(width, height);
    areaResult.textContent = typeof area === 'number' 
        ? formatAreaMessage(area) 
        : area; // Error message
});

/****************************
 * PART 3: Loops
 ****************************/
// Loop 1: Countdown timer
const countdownBtn = document.getElementById('countdownBtn');
const countdownDisplay = document.getElementById('countdownDisplay');

countdownBtn.addEventListener('click', function() {
    countdownDisplay.innerHTML = '';
    for (let i = 5; i >= 0; i--) {
        setTimeout(() => {
            countdownDisplay.textContent = i > 0 ? `Countdown: ${i}` : 'Blast off!';
        }, (5 - i) * 1000);
    }
});

// Loop 2: Create numbered list
const createListBtn = document.getElementById('createListBtn');
const numberList = document.getElementById('numberList');

createListBtn.addEventListener('click', function() {
    numberList.innerHTML = '';
    let i = 1;
    while (i <= 5) {
        const li = document.createElement('li');
        li.textContent = `Item ${i}`;
        numberList.appendChild(li);
        i++;
    }
});

/****************************
 * PART 4: DOM Interactions
 ****************************/
// Interaction 1: Change element color
const changeColorBtn = document.getElementById('changeColorBtn');
const colorBox = document.getElementById('colorBox');

changeColorBtn.addEventListener('click', function() {
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = randomColor;
});

// Interaction 2: Toggle visibility
const toggleVisibilityBtn = document.getElementById('toggleVisibilityBtn');

toggleVisibilityBtn.addEventListener('click', function() {
    colorBox.classList.toggle('hidden');
});

// Interaction 3: Append new element
const appendItemBtn = document.getElementById('appendItemBtn');
const dynamicList = document.getElementById('dynamicList');

appendItemBtn.addEventListener('click', function() {
    const itemCount = dynamicList.children.length + 1;
    const newItem = document.createElement('li');
    newItem.textContent = `Dynamic Item ${itemCount}`;
    dynamicList.appendChild(newItem);
});
