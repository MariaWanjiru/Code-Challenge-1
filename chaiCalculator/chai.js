function calculateChaiIngredients(numberOfCups) {
  // Ingredient amounts per 1 cup
  const waterPerCup = 200; // in ml
  const milkPerCup = 50; // in ml
  const teaLeavesPerCup = 1; // in tablespoons
  const sugarPerCup = 2; // in teaspoons

  // Total required
  const water = numberOfCups * waterPerCup;
  const milk = numberOfCups * milkPerCup;
  const teaLeaves = numberOfCups * teaLeavesPerCup;
  const sugar = numberOfCups * sugarPerCup;

  // Output result
  console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoon(s)`);
  console.log(`Sugar (Sukari): ${sugar} teaspoon(s)`);
  console.log("\nEnjoy your Chai Bora! ☕");
}

// Prompt user input
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(input);

// Validate input and call function
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Tafadhali, enter a valid number of cups.");
}