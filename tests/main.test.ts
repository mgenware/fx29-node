import * as main from '../lib/main';

test('encodeBuffer', () => {
  expect(main.encodeBuffer(Buffer.from([1, 2, 3]))).toBe('AQID');
  expect(main.encodeBuffer(Buffer.from([1, 2, 3]), 17)).toBe('EBMS');
});

test('encodeString', () => {
  expect(main.encodeString('你好😡')).toBe('5L2g5aW98J%2BYoQ%3D%3D');
  expect(main.encodeString('你好😡', 17)).toBe('9ayx9LSs4Y6JsA%3D%3D');
});

test('decodeBuffer', () => {
  expect(main.decodeBuffer('AQID').toString()).toBe(Buffer.from([1, 2, 3]).toString());
  expect(main.decodeBuffer('EBMS', 17).toString()).toBe(Buffer.from([1, 2, 3]).toString());
});

test('decodeString', () => {
  expect(main.decodeString('5L2g5aW98J%2BYoQ%3D%3D')).toBe('你好😡');
  expect(main.decodeString('9ayx9LSs4Y6JsA%3D%3D', 17)).toBe('你好😡');
});
