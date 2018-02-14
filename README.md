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
import * as fx29 from 'fx29-node';
// or Node.js style: const fx29 = require('fx29-node');
```

### API
`encodeURIComponent` and Base64 are used during encoding, an optional `xor` parameter can be applied to add some obfuscation.

```typescript
function encodeBuffer(buffer: Buffer, xor?: number[]): string;
function encodeString(s: string, xor?: number[]): string;
function decodeBuffer(s: string, xor?: number[]): Buffer;
function decodeString(s: string, xor?: number[]): string;
```

### Comparison with other methods
```js
const fx29 = require('fx29-node');

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
```

Output:
```
encodeURIComponent
%E4%B8%80%E4%BA%8C%E4%B8%89%E5%9B%9B%E4%BA%94%E5%85%AD%E4%B8%83%F0%9F%99%88%F0%9F%99%89%F0%9F%99%8A%F0%9F%90%92%F0%9F%99%89%F0%9F%99%8A%F0%9F%90%92

UTF8 + base64 + encodeURIComponent
5LiA5LqM5LiJ5Zub5LqU5YWt5LiD8J+ZiPCfmYnwn5mK8J+QkvCfmYnwn5mK8J+Qkg==
5LiA5LqM5LiJ5Zub5LqU5YWt5LiD8J%2BZiPCfmYnwn5mK8J%2BQkvCfmYnwn5mK8J%2BQkg%3D%3D

UTF8 + hex + encodeURIComponent
e4b880e4ba8ce4b889e59b9be4ba94e585ade4b883f09f9988f09f9989f09f998af09f9092f09f9989f09f998af09f9092
e4b880e4ba8ce4b889e59b9be4ba94e585ade4b883f09f9988f09f9989f09f998af09f9092f09f9989f09f998af09f9092

fx29
5bqD5biP5bqK5JmY5biX5Ieu5bqA8Z2aifKcmIvznpuJ8Z2Tk%2FKcmIvznpuJ8Z2Tkw
```
