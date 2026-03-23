const now = new Date();
console.log("now", now.toString());

const birthday = new Date(1990, 4, 15, 8, 30); // months 0-11
console.log("birthday", birthday.toLocaleString());

// parse
const fromISO = new Date("2026-03-23T12:00:00Z");
console.log("iso", fromISO.toISOString());

// arithmetic
const oneDayMs = 24 * 60 * 60 * 1000;
const tomorrow = new Date(now.getTime() + oneDayMs);

const diffDays = Math.round((tomorrow - now) / oneDayMs);
console.log("diffDays", diffDays);

// timezone-safe formatting (Intl)
console.log(
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(now)
);