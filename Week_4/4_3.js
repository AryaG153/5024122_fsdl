// JavaScript Conditional Statements Examples

// 1. if statement
const age = 18;
if (age >= 18) {
    console.log("You are an adult");
}

// 2. if...else statement
const score = 45;
if (score >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// 3. if...else if...else statement
const grade = 75;
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else {
    console.log("F");
}

// 4. Ternary operator (conditional expression)
const isMember = true;
const discount = isMember ? 20 : 0;
console.log(`Discount: ${discount}%`);

// 5. switch statement
const day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}

// 6. Logical operators (&&, ||, !)
const hasLicense = true;
const hasInsurance = false;
if (hasLicense && hasInsurance) {
    console.log("Can drive");
} else if (hasLicense || hasInsurance) {
    console.log("Partial requirements met");
}