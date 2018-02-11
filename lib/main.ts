import * as fx28 from 'fx28-node';

export function encodeBuffer(buffer: Buffer, xor?: number[]): string {
  const dest = (xor && xor.length) ? xorBuffer(buffer, xor) : buffer;
  return encodeURIComponent(fx28.encode(dest));
}

export function encodeString(s: string, xor?: number[]): string {
  return encodeBuffer(Buffer.from(s, 'utf8'), xor);
}

export function decodeBuffer(s: string, xor?: number[]): Buffer {
  const buffer = fx28.decode(decodeURIComponent(s));
  return (xor && xor.length) ? xorBuffer(buffer, xor) : buffer;
}

export function decodeString(s: string, xor?: number[]): string {
  return decodeBuffer(s, xor).toString('utf8');
}

function xorBuffer(src: Buffer, xor: number[]): Buffer {
  const dest = Buffer.allocUnsafe(src.length);

  let j = 0;
  for (let i = 0; i < src.length; i++) {
    dest[i] = src[i] ^ xor[j++];

    if (j >= xor.length) {
      j = 0;
    }
  }
  return dest;
}
