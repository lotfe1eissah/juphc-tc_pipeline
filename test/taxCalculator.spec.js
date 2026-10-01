const { calculateTax } = require('../src/taxCalculator');

describe('Tax Calculator Tests', () => {
  it('should return 0 for income <= 10000', () => {
    expect(calculateTax(5000)).toBe(0);
  });

  it('should calculate 10% tax for income between 10001 and 50000', () => {
    expect(calculateTax(30000)).toBe(2000);
  });

  it('should calculate 20% tax for income above 50000', () => {
    expect(calculateTax(60000)).toBe(6000);
  });

  it('should throw an error for negative income', () => {
    expect(() => calculateTax(-500)).toThrowError('Invalid income');
  });
});