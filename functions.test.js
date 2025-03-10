import { capFirst } from './functions.js';
import { reversed } from './functions.js';
import { calculator } from './functions.js';
import { caesar } from './functions.js';
import { analyzeArray } from './functions.js';

test('first character capitalized', () => {
  expect(capFirst('test string')).toBe('Test string');
});

test('reversed string', () => {
  expect(reversed('string')).toBe('gnirts');
});

test('Calc-addition', () => {
  expect(calculator.add(3,2)).toBe(5);
});

test('Calc-subtraction', () => {
  expect(calculator.subtract(10,3)).toBe(7);
});

test('Calc-division', () => {
  expect(calculator.divide(33,3)).toBe(11);
});

test('Calc-multiplication', () => {
  expect(calculator.multiply(8,9)).toBe(72);
});

test('Caesar-wrap', () => {
  expect(caesar('vwxyz', 5)).toBe('abcde');
});

test('Caesar-case-preservation', () => {
  expect(caesar('HeLLo', 3)).toBe('KhOOr');
});

test('Caesar-punctuation', () => {
  expect(caesar('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('Analyze-array', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6});
});