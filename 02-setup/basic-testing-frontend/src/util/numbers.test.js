import { describe, it, expect } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
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
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const input = ['1', '2', '3'];

    const result = cleanNumbers(input);

    expect(result[0]).toBeTypeOf('number');
    expect(result).toEqual([1, 2, 3]);
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow(/must not be empty/);
  });
});
