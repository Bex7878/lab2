// Task 1: Changing String Casing
function greetUser() {
    let name = prompt("What is your name?");
    let formattedName = name.toLowerCase();
    formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
    alert("Hello " + formattedName);
}

// Task 2: Life in Weeks
function lifeInWeeks(age) {
    const yearsLeft = 90 - age;
    const daysLeft = yearsLeft * 365;
    const weeksLeft = yearsLeft * 52;
    const monthsLeft = yearsLeft * 12;
    return `You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`;
}

function displayLifeInWeeks() {
    let age = prompt("What is your current age?");
    alert(lifeInWeeks(age));
}

// Task 3: BMI Calculator
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        return `Your BMI is ${bmi.toFixed(2)}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Your BMI is ${bmi.toFixed(2)}, so you have a normal weight.`;
    } else {
        return `Your BMI is ${bmi.toFixed(2)}, so you are overweight.`;
    }
}

function displayBMI() {
    let weight = prompt("Enter your weight in kg:");
    let height = prompt("Enter your height in meters:");
    alert(calculateBMI(weight, height));
}

// Task 4: Who's Buying Lunch?
function whosPaying(names) {
    let randomIndex = Math.floor(Math.random() * names.length);
    return `${names[randomIndex]} is going to buy lunch today.`;
}

function displayWhoIsPaying() {
    let names = ["Bex", "Nurai", "Ersain", "Abai", "Asyl"];
    alert(whosPaying(names));
}

// Task 5: Fibonacci Sequence
function fibonacciGenerator(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n);
}

function displayFibonacci() {
    let number = prompt("How many Fibonacci numbers do you want?");
    alert(fibonacciGenerator(number));
}
