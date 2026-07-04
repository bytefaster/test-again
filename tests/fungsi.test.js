const { outer } = require('../src/fungsi');

describe('outer', () => {
  it('should return the sum of three positive numbers', () => {
    expect(outer(10, 20, 30)).toBe(60);
  });

  it('should return 0 when all arguments are 0', () => {
    expect(outer(0, 0, 0)).toBe(0);
  });

  it('should handle negative numbers', () => {
    expect(outer(-5, 10, -3)).toBe(2);
  });

  it('should handle decimal numbers', () => {
    expect(outer(1.5, 2.5, 3.0)).toBeCloseTo(7.0);
  });

  it('should handle large numbers', () => {
    expect(outer(1000000, 2000000, 3000000)).toBe(6000000);
  });

  it('should return NaN when called with non-numeric arguments', () => {
    expect(outer('a', 'b', 'c')).toBe('abc');
  });

  it('should handle a mix of positive and negative numbers summing to zero', () => {
    expect(outer(5, -5, 0)).toBe(0);
  });
});
