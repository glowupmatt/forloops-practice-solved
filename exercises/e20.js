// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let indiWord;
  const hasTargetLetter = [];
  const doesntHaveLetter = [];
  const allNames = [];
  for (let i = 0; i < array.length; i++) {
    indiWord = array[i];
    for (let l = 0; l < indiWord.length; l++) {
      if (indiWord[l] === "a") {
        hasTargetLetter.push(indiWord);
        break;
      } else if (l === indiWord.length - 1) {
        doesntHaveLetter.push(indiWord);
      }
    }
  }
  allNames.push(hasTargetLetter, doesntHaveLetter);
  return allNames;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
