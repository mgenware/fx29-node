import * as main from '../lib/main';

test('encodeBuffer', () => {
  expect(main.encodeBuffer(Buffer.from([1, 2, 3]))).toBe('AQID');
  expect(main.encodeBuffer(Buffer.from([1, 2, 3]), [17, 2, 255])).toBe('EAD8');
});

test('encodeString', () => {
  expect(main.encodeString('你好😡')).toBe('5L2g5aW98J%2BYoQ');
  expect(main.encodeString('你好😡', [17, 2, 255])).toBe('9b9f9KdC4Z1nsA');
});

test('decodeBuffer', () => {
  expect(main.decodeBuffer('AQID').toString()).toBe(Buffer.from([1, 2, 3]).toString());
  expect(main.decodeBuffer('EAD8', [17, 2, 255]).toString()).toBe(Buffer.from([1, 2, 3]).toString());
});

test('decodeString', () => {
  expect(main.decodeString('5L2g5aW98J%2BYoQ')).toBe('你好😡');
  expect(main.decodeString('9b9f9KdC4Z1nsA', [17, 2, 255])).toBe('你好😡');
});
