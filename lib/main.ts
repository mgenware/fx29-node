export function encodeBuffer(buffer: Buffer, xor?: number): string {
  const dest = xor ? xorBuffer(buffer, xor) : buffer;
  return encodeURIComponent(dest.toString('base64'));
}

export function encodeString(s: string, xor?: number): string {
  return encodeBuffer(Buffer.from(s, 'utf8'), xor);
}

export function decodeBuffer(s: string, xor?: number): Buffer {
  const buffer = Buffer.from(decodeURIComponent(s), 'base64');
  return xor ? xorBuffer(buffer, xor) : buffer;
}

export function decodeString(s: string, xor?: number): string {
  return decodeBuffer(s, xor).toString('utf8');
}

function xorBuffer(src: Buffer, value: number): Buffer {
  const dest = Buffer.allocUnsafe(src.length);
  for (let i = 0; i < src.length; i++) {
    dest[i] = src[i] ^ value;
  }
  return dest;
}
