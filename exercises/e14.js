// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let clientsWithWrongBalance = [];
  for (let i = 0; i < array.length; i++) {
    let withdrawalTotal;
    let depositTotal;
    let withdrawal = array[i].withdrawals;
    let withdrawalCount = 0;
    if (withdrawal) {
      for (let j = 0; j < withdrawal.length; j++) {
        withdrawalCount += withdrawal[j];
      }
    } else {
      0;
    }
    withdrawalTotal = withdrawalCount;

    let deposit = array[i].deposits;
    let depositCount = 0;
    if (deposit) {
      for (let k = 0; k < deposit.length; k++) {
        depositCount += deposit[k];
      }
    } else {
      0;
    }
    depositTotal = depositCount;

    const calculatedTotal = depositTotal - withdrawalTotal;
    const isValidBalance = array[i].balance === calculatedTotal;
    if (!isValidBalance) {
      clientsWithWrongBalance.push(array[i]);
    }
  }
  return clientsWithWrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
