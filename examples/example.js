const fx29 = require('..');

const s = 'Hi, 😎';
const xor = 20; // optional, for obfuscation

// encode
const encoded = fx29.encodeString(s, xor);
console.log(encoded)

// decode
const decoded = fx29.decodeString(encoded, xor);
console.log(decoded);

