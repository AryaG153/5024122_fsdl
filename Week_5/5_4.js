const text = "  Hello World!  ";
console.log(text.length); // 15
console.log(text.trim()); // "Hello World!"

const lower = text.toLowerCase();
const replaced = lower.replace("hello", "hi");
const parts = replaced.split(" ");

const template = `User: ${replaced.trim()}, created: ${new Date().toISOString()}`;
console.log(template);

// includes / startsWith / endsWith
console.log(text.includes("World"));
console.log(text.startsWith("  He"));
console.log(text.endsWith("!  "));