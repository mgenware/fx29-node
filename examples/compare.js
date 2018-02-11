const fx29 = require('..');

const s = '一二三四五六七🙈🙉🙊🐒🙉🙊🐒';
let utf8Bytes = Buffer.from(s, 'utf8');

console.log('encodeURIComponent');
console.log(encodeURIComponent(s), '\n');

console.log('UTF8 + base64 + encodeURIComponent');
let base64Str = utf8Bytes.toString('base64');
console.log(base64Str);
console.log(encodeURIComponent(base64Str), '\n')

console.log('UTF8 + hex + encodeURIComponent');
let hexStr = utf8Bytes.toString('hex');
console.log(hexStr);
console.log(encodeURIComponent(hexStr), '\n')

console.log('fx29');
console.log(fx29.encodeString(s, [1, 2, 3]), '\n');