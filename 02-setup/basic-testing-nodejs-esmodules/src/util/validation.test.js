import { it, expect, describe } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation';

describe('validateStringNotEmpty()', () => {
  it('should return undefined', () => {
    const input = 'aString';
    const input2 = ' a ';

    const resultFn = () => {
      validateStringNotEmpty(input);
      validateStringNotEmpty(input2);
    };

    expect(resultFn).not.toThrow();
  });

  it('should throw with spaces', () => {
    const input = '  ';

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    expect(resultFn).toThrow(/ must not be empty/);
  });
});

describe('validateStringNotEmpty()', () => {
  it('should yeld undefined', () => {
    const input = 1;

    const result = validateNumber(input);

    expect(result).toBeUndefined();
  });

  it('should throw an Error passing NaN', () => {
    const input1 = {};
    const input2 = 'string';
    const input3 = [];

    const resultFn1 = () => validateNumber(input1);
    const resultFn2 = () => validateNumber(input2);
    const resultFn3 = () => validateNumber(input3);

    expect(resultFn1).toThrow(/Invalid number input/);
    expect(resultFn2).toThrow(/Invalid number input/);
    expect(resultFn3).toThrow(/Invalid number input/);
  });
});
