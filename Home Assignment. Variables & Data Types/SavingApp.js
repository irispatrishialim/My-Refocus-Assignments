let goalSavingsAmount = 10000;
let commas = goalSavingsAmount.toLocaleString("en-US");
let currentBalance = 7500;
let percentageSavings = (1 - (currentBalance / goalSavingsAmount)) * 100;

console.log(`Thank you for your discipline and hardwork, Sam! You are now ${percentageSavings}% away from your goal of saving ₱ ${commas}.`)