function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    } finally {
        console.log("Operation completed");
    }
}

// Usage examples
console.log(divideNumbers(10, 2));   // 5
console.log(divideNumbers(10, 0));   // null (catches error)
console.log(divideNumbers(15, 3));   // 5