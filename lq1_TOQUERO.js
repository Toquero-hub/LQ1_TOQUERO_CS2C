// Define two persona objects with name, age, and address properties
const persona1 = {
  name: "Maria Delos Santos Las Marias",
  age: 25,
  address: "Upper Session Road, Baguio City, Benguet"
};

const persona2 = {
  name: "Juan Gamose Dela Cruz",
  age: 28,
  address: "San Nicolas, Candon City, locos, Sur"
};

// Split the name of persona1 into an array of names
const persona1NameArray = persona1.name.split(" ");
// Extract the last name from the array
const persona1LastName = persona1NameArray[persona1NameArray.length - 1];
// Join the remaining names to form the first and middle names
const persona1FirstNameMiddleName = persona1NameArray.slice(0, -1).join(" ");
// Rearrange the name to "Last Name, First Name Middle Name"
const persona1RearrangedName = `${persona1LastName}, ${persona1FirstNameMiddleName}`;

// Repeat the same steps for persona2
const persona2NameArray = persona2.name.split(" ");
const persona2LastName = persona2NameArray[persona2NameArray.length - 1];
const persona2FirstNameMiddleName = persona2NameArray.slice(0, -1).join(" ");
const persona2RearrangedName = `${persona2LastName}, ${persona2FirstNameMiddleName}`;

// Log the rearranged names, ages, and addresses of both personas
console.log(`${persona1RearrangedName}, ${persona1.age}, ${persona1.address}`);
console.log(`${persona2RearrangedName}, ${persona2.age}, ${persona2.address}`);

// Calculate the lengths of the names and addresses
const persona1NameLength = persona1.name.length;
const persona2NameLength = persona2.name.length;
const persona1AddressLength = persona1.address.length;
const persona2AddressLength = persona2.address.length;

// Sum the ages of both personas and log the result
const sumOfNumericValues = persona1.age + persona2.age;
console.log(`Sum of all numeric values: ${sumOfNumericValues}`);

// Perform a mathematical operation involving the ages and name lengths
const ageOperation = (persona1.age + persona2.age) - persona1NameLength;
const finalAgeOperation = ageOperation * persona2NameLength;
console.log(`Age operation result: ${finalAgeOperation}`);

// Calculate the result of raising persona1's address length to the power of persona2's address length
const addressOperation = Math.pow(persona1AddressLength, persona2AddressLength);
console.log(`Address operation result: ${addressOperation}`);
