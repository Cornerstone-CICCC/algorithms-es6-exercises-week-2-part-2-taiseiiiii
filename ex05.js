// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.
const target = [1, 2, 3, 4, 5];

console.log(
  target.some((e) => e % 2 === 0)
    ? "Some of numbers are even"
    : "No even numbers found"
);
