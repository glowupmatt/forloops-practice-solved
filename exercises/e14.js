// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const clientsWithWrongBalance = array.filter((client) => {
    const withdrawalTotal = client.withdrawals
      ? client.withdrawals.reduce((acc, val) => acc + val, 0)
      : 0;
    const depositTotal = client.deposits
      ? client.deposits.reduce((acc, val) => acc + val, 0)
      : 0;
    const calculatedTotal = depositTotal - withdrawalTotal;
    const isValidBalance = client.balance === calculatedTotal;
    return !isValidBalance;
  });
  return clientsWithWrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
