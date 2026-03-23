const arr = [1, 2, 3, 4, 5];

// add/remove
arr.push(6);
arr.pop();

// transform/filter
const squared = arr.map(n => n * n);
const evens = arr.filter(n => n % 2 === 0);

// search/fold
const has4 = arr.includes(4);
const firstEven = arr.find(n => n % 2 === 0);
const sum = arr.reduce((acc, n) => acc + n, 0);

// destructuring
const [first, second, ...rest] = arr;
console.log({ first, second, rest });