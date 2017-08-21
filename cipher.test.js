let { encipher, decipher} = require('./cipher.js');

describe('encipher', function() {
  test('can shift a single value', function() {
    expect(encipher('hello', 1)).toBe('ifmmp');
  });

  test('can shift any value', function() {
    expect(encipher('hello', 7)).toBe('olssv');
  });

  test('can shift to the beginning of the alphabet', function() {
    expect(encipher('zygote', 4)).toBe('dcksxi');
  });
});


describe('decipher', function() {
  test('can shift a single value', function() {
    expect(decipher('ifmmp', 1)).toBe('hello');
  });

  test('can shift any value', function() {
    expect(decipher('olssv', 7)).toBe('hello');
  });

  test('can shift to the end of the alphabet', function() {
    expect(decipher('dcksxi', 4)).toBe('zygote');
  });
});
