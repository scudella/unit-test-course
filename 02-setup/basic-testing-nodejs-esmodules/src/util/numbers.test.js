import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should transform a string number into a number', () => {
  const myNumber = '5';

  const result = transformToNumber(myNumber);

  expect(result).toBe(5).toBeTypeOf('number');
});

it('should yield NaN for non-transformable values', () => {
  const myString = 'notANmber';
  const input = {};

  const result = transformToNumber(myString);
  const result2 = transformToNumber(input);

  expect(result).toBeNaN();
  expect(result2).toBeNaN();
});
