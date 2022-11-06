function calculateBMI(height, weight) {
    let heightMeter = height * 0.01
    let result = weight / (Math.pow(heightMeter, 2));
    return result;
}

console.log(calculateBMI(157, 50)); // (kg, cm)