function validateUser(user) {
  if (!user || typeof user !== "object") {
    throw new TypeError("user must be an object");
  }
  if (!user.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
    throw new Error("invalid email");
  }
  if (!Number.isInteger(user.age) || user.age < 0 || user.age > 120) {
    throw new RangeError("age must be 0..120");
  }
  return true;
}

try {
  validateUser({ email: "test@example.com", age: 31 });
  console.log("valid");
} catch (err) {
  console.error(err.name, err.message);
}