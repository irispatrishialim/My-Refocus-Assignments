function calculateBMI(height, weight) {
    let heightMeter = height * 0.01
    let result1 = weight / (Math.pow(heightMeter, 2));
    return Number(result1.toFixed(1));
}

// console.log(calculateBMI(157, 50)); // (kg, cm)

function testCalculator() {
    const result = calculateBMI(157, 50);
    const expected = 20.3;

    console.assert(
        result === expected,
        `The result ${result} doesn't match the expected ${expected}`
    );
}

testCalculator();