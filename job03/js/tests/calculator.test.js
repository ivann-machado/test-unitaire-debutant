const evaluateExpression = require('../calculator').calculate;

test("Addition : 2 + 3 should equal 5", () => {
    expect(evaluateExpression("2 + 3")).toBe(5);
})
test("Subtraction : 5 - 3 should equal 2", () => {
    expect(evaluateExpression("5 - 3")).toBe(2);
})
test("Multiplication : 2 * 3 should equal 6", () => {
    expect(evaluateExpression("2 * 3")).toBe(6);
})
test("Division : 6 / 3 should equal 2", () => {
    expect(evaluateExpression("6 / 3")).toBe(2);
})
test("Division by zero : 6 / 0 should equal Infinity", () => {
    expect(evaluateExpression("6 / 0")).toBe(Infinity);
})
test("Division by zero : 0 / 0 should equal NaN", () => {
    expect(evaluateExpression("0 / 0")).toBeNaN();
})
test("Invalid expression : 2 + a should throw an error", () => {
    expect(() => evaluateExpression("2 + a")).toThrow(Error);
})
test("Priority test : 2 + 3 * 4 should equal 14", () => {
    expect(evaluateExpression("2 + 3 * 4")).toBe(14);
})
test("Priority test : 2 * 3 + 4 should equal 10", () => {
    expect(evaluateExpression("2 * 3 + 4")).toBe(10);
})
test("Priority test : (2 + 3) * 4 should equal 20", () => {
    expect(evaluateExpression("(2 + 3) * 4")).toBe(20);
})