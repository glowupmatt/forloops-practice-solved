// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  const newArray = array.sort();
  // Your code goes here...
  return newArray[0];
}
findMinValueInArray([2, 45, 32, 3, 0, 46, 12]);

export function findMaxValueInArray(array) {
  // Your code goes here...
  const newArray = array.sort();
  const reversedArray = newArray.reverse();
  return reversedArray[0];
}
findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]);
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
