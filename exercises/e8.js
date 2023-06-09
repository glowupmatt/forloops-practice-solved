// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  const clientArray = [];

  array.forEach((person) => {
    if (person.balance > 0) {
      clientArray.push(person);
    }
  });

  const sortedClientArray = clientArray.sort((a, b) => b.balance - a.balance);

  return sortedClientArray.slice(0, 1);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
