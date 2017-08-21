// PSEUDO CODE
// we will need a way to map the ascii char codes
// for each character in the string
//
// "a".charCodeAt(0) will return the char code for "a"
// String.fromCharCode(65, 66, 67) will return "ABC"
//
// will we have to worry about case? NO looks like all lowercase
// so only codes between a:97 and z:122
//
//

// END PSEUDO CODE



function encipher(str, shift) {
  // turn str into an array of characters
  str = str.split('');

  // use map to change each character into its ascii char code
  let codes = str.map( (char) => {
    return char.charCodeAt(0);
  });

  // replace each char code with its offset value using mod arithmetic
  let shiftedCodes = codes.map( (code) => {
    // shift the code by 97 (since 97 is 'a')
    let baseCode = code - 97;
    let shiftedCode = (baseCode + shift) % 26;
    return shiftedCode + 97;
  })

  // convert all the codes back to their ascii character
  let encryptedString = shiftedCodes.map( (code) => {
    return String.fromCharCode(code);
  })

  // join the array and return the string
  return encryptedString.join('');
}

function decipher(str, shift) {
  // turn str into an array of characters
  str = str.split('');

  // use map to change each character into its ascii char code
  let codes = str.map( (char) => {
    return char.charCodeAt(0);
  });

  // replace each char code with its offset value using mod arithmetic
  let shiftedCodes = codes.map( (code) => {
    // shift the code by 97 (since 97 is 'a')
    let baseCode = code - 97;
    let shiftedCode = 0;
    if( baseCode - shift < 0 ) {
      shiftedCode = 26 + (baseCode - shift) % 26;
    } else {
      shiftedCode = (baseCode - shift) % 26;
    }

    return shiftedCode + 97;
  })

  // convert all the codes back to their ascii character
  let encryptedString = shiftedCodes.map( (code) => {
    return String.fromCharCode(code);
  })

  // join the array and return the string
  return encryptedString.join('');

}

module.exports = {
  encipher,
  decipher
}
