// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.
const target = [1, 2, 3, 4, -1];

console.log(
  target.every((e) => e >= 0)
    ? "All numbers are positive"
    : "Not all numbers are positive"
);
