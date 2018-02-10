# fx29-node
Encode bytes to safe URL string

## Installation
```sh
yarn add fx29-node
```

## Run tests
```sh
yarn test
```

## Usage
import:
```js
import fx29 from 'fx29-node`;
// or Node.js style: const fx29 = require('fx29-node');
```

### API
`encodeURIComponent` and Base64 are used during encoding, an optional `xor` parameter can be applied to add obfuscation.

```typescript
function encodeBuffer(buffer: Buffer, xor?: number): string;
function encodeString(s: string, xor?: number): string;
function decodeBuffer(s: string, xor?: number): Buffer;
function decodeString(s: string, xor?: number): string;
```

### Example
```js
const fx29 = require('fx29');

const s = 'Hi, 😎';
const xor = 20; // optional, for obfuscation

// encode
const encoded = fx29.encodeString(s, xor);
console.log(encoded)

// decode
const decoded = fx29.decodeString(encoded, xor);
console.log(decoded);
```

Output:
```
XH04NOSLjJo%3D
Hi, 😎
```