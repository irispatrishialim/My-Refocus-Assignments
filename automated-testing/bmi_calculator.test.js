const testResult = require("./bmi_calculator");

test("Check if BMI Calculator generate correct results", () => {
    expect(testResult(157, 50)).toBe(20.3);
});