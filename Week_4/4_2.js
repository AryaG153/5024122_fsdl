// Arithmetic Operators
let a = 10;
let b = 3;

console.log(a + b);      // Addition: 13
console.log(a - b);      // Subtraction: 7
console.log(a * b);      // Multiplication: 30
console.log(a / b);      // Division: 3.333...
console.log(a % b);      // Modulus: 1
console.log(a ** b);     // Exponentiation: 1000

// Assignment Operators
let x = 5;
x += 3;  // x = x + 3 (8)
x -= 2;  // x = x - 2 (6)
x *= 2;  // x = x * 2 (12)
x /= 3;  // x = x / 3 (4)

// Comparison Operators
console.log(5 == '5');    // true (loose equality)
console.log(5 === '5');   // false (strict equality)
console.log(5 != '5');    // false
console.log(5 !== '5');   // true
console.log(5 > 3);       // true
console.log(5 < 3);       // false
console.log(5 >= 5);      // true
console.log(5 <= 5);      // true

// Logical Operators
console.log(true && false);  // AND: false
console.log(true || false);  // OR: true
console.log(!true);          // NOT: false

// Ternary Operator
let age = 20;
let status = age >= 18 ? 'Adult' : 'Minor';
console.log(status);  // Adult

// Increment/Decrement
let num = 5;
console.log(num++);   // 5, then 6
console.log(++num);   // 7

// Typeof Operator
console.log(typeof 42);           // number
console.log(typeof 'hello');      // string
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined