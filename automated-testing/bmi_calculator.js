function calculateBMI(height, weight) {
    let heightMeter = height * 0.01
    let result1 = weight / (Math.pow(heightMeter, 2));
    return Number(result1.toFixed(1));
}

module.exports = calculateBMI;