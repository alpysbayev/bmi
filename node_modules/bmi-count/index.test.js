const bmi = require("./index");



it(' should calculate BMI correctly', () => {
    let weight = 70;
    let height = 1.75;
    let expectedBMI = 70 / (1.75 * 1.75);
    expect(bmi(weight, height)).toBe(expectedBMI);
  });
  
  it (' should handles zero weight correctly', () => {
    let weight = 0;
    let height = 1.75;
    expect(bmi(weight, height)).toBe(0);
  });

  it(' should handle negative weight correctly', () => {
    let weight = -70;
    let height = 1.75;
    try {
        bmi(weight, height)
        throw new Error("your weight is a negative number")
      } catch (e) {
        expect(e.message).toBe("your weight is a negative number")
      }
    });