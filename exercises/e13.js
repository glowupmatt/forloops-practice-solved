// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  const depositsArray = [];

  // Your code goes here...
  array.forEach((client) => {
    if (client.deposits) {
      const total = client.deposits.reduce((a, b) => {
        return a + b;
      }, 0);
      if (total < 2000) {
        depositsArray.push(client);
      }
    } else {
      depositsArray.push(client);
    }
  });
  return depositsArray;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
