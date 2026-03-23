function parseJson(jsonStr) {
  try {
    const data = JSON.parse(jsonStr);
    console.log("Parsed:", data);
    return data;
  } catch (err) {
    console.error("Invalid JSON:", err.message);
    return null;
  } finally {
    console.log("parseJson done");
  }
}

const valid = '{"name":"Alice"}';
const invalid = '{name:"Alice"}';

parseJson(valid);   // parsed
parseJson(invalid); // error handled