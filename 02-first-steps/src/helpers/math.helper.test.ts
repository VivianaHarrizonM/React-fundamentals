import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('add', () => {

test('should add two positives number', () => {
  // ! 1. Arrage
  const a = 1;
  const b = 2;

  //! 2. Act
  const result = add(a, b);

  //! 3. Assert
  expect(result).toBe(a + b);
  }); 

});

describe('subtract', () => {

test('should subtract two positives number', () => {
  // ! 1. Arrage
  const a = 1;
  const b = 2;

  //! 2. Act
  const result = subtract(a, b);

  //! 3. Assert
  expect(result).toBe(a - b);
  }); 

});

describe('multiply', () => {

test('should multiply two positives number', () => {
  // ! 1. Arrage
  const a = 1;
  const b = 2;

  //! 2. Act
  const result = multiply(a, b);

  //! 3. Assert
  expect(result).toBe(a * b);
  }); 

});

