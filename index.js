function hasTargetSum(array, target) {
  // Write your algorithm here

  const visitedNumbers = new Set();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (visitedNumbers.has(complement)) {
      return true;
    }
    visitedNumbers.add(array[i]);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  Time Complexity: O(n)
*/

/* 
  Add your pseudocode here
  1. Create an empty set called 'visitedNumbers' to store the visited numbers.
  2. Iterate through each number in the input array.
  3. For each number, calculate the complement by subtracting it from the target.
  4. Check if the complement exists in the 'visitedNumbers' set.
    5. If it does, return true since we found a pair of numbers that sum up to the target.
    6. If it doesn't, add the current number to the 'visitedNumbers' set and continue to the next iteration.
  7. If the loop finishes without finding a pair, return false.
*/

/*
  Add written explanation of your solution here
  - The function uses a set to efficiently store the visited numbers and perform constant-time lookups.
  - It iterates through each number in the input array and checks if the complement of the current number (target minus the current number) exists in the set.
  - If a complement is found, it means we have a pair of numbers that sum up to the target, so the function returns true.
  - If the loop finishes without finding a pair, it means no such pair exists, and the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
