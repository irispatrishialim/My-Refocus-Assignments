let caloriePer30Min = 225; //cycling per 0.5 hours is 225 
let cycleHoursPerDay = 0.5;
let numTimesSamCycle = 15; //Sam cycle in a week
let totalCalorieBurned = caloriePer30Min * numTimesSamCycle;

console.log(`Great work, Sam! After hours of running every day for a week, you may lose a total of ${totalCalorieBurned} calories.`);
