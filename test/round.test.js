import round from '../src';

describe('round', () => {
  test('12.125 -> 2', () => {
    expect(round(12.125, 2)).toBe('12.13');
  });
  test('12.135 -> 2', () => {
    expect(round(12.135, 2)).toBe('12.14');
  });
  test('12.135 -> 0', () => {
    expect(round(12.135, 0)).toBe('12');
  });
  test('12.999 -> 2', () => {
    expect(round(12.999, 2)).toBe('13.00');
  });
  test('12.999 -> 0', () => {
    expect(round(12.999, 0)).toBe('13');
  });
  test('number with type string will treat as number', () => {
    expect(round('12.125', 2)).toBe('12.13');
  });
  test('param number isNaN will throw error', () => {
    expect(() => round('abc', 2)).toThrowError();
  });
  test('default precision', () => {
    expect(round(12.125)).toBe('12.13');
  });
  test('precision with type string will treat as number', () => {
    expect(round(12.125, '2')).toBe('12.13');
  });
  test('param precision isNaN will throw error', () => {
    expect(() => round(12.125, 'abc')).toThrowError();
  });
});
