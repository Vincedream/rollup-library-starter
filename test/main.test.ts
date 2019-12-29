import {Sum, sayAge} from '../src/main';

test('sum is right', () => {
  expect(Sum(1, 2)).toBe(10);
});

test('sayAge is right', () => {
  expect(sayAge(8)).toBe('young');
  expect(sayAge(38)).toBe('old');
  expect(sayAge(18)).toBe('normal');
});
