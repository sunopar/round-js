import compose from '../src/utils/compose';

const add = (a, b) => a + b;
const add5 = number => number + 5;
const minus10 = number => number - 10;
describe('utils -> compose', () => {
  test('compose should be excuted with one param function', () => {
    expect(compose(add)(1, 2)).toBe(3);
  });
  test('compose should throw error if params are not functions ', () => {
    expect(() => compose(add, 'add', add)).toThrowError();
    expect(() => compose('add')).toThrowError();
  });
  test('compose should do well with mutiple params', () => {
    expect(compose(add5, minus10, add)(7, 8)).toBe(10);
  });
  test('compose should return default primary function with no params', () => {
    expect(compose()(1)).toBe(1);
  });
});
