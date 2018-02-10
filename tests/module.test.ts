const main = require('../..');
import * as fs from 'fs';

describe('require this module', () => {
  test('Verify module members', () => {
    expect(typeof main.encodeBuffer).toBe('function');
    expect(typeof main.encodeString).toBe('function');
    expect(typeof main.decodeBuffer).toBe('function');
    expect(typeof main.decodeString).toBe('function');
  });

  test('Verify type definition files', () => {
    expect(fs.statSync('./dist/lib/main.d.ts').isFile()).toBeTruthy();
  });
});
