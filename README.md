# fx29-node

[![MEAN Module](https://img.shields.io/badge/MEAN%20Module-TypeScript-blue.svg)](https://github.com/mgenware/MEAN-Module)
[![Build Status](https://travis-ci.org/mgenware/fx29-node.svg?branch=master)](http://travis-ci.org/mgenware/fx29-node)
[![npm version](https://badge.fury.io/js/fx29-node.svg)](https://badge.fury.io/js/fx29-node)
[![Node.js Version](http://img.shields.io/node/v/fx29-node.svg)](https://nodejs.org/en/)

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
import fx29 from 'fx29-node';
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
const fx29 = require('fx29-node');

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