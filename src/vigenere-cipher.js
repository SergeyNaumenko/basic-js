const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(option) {
    this.reverseStr = (option === false);
    this.latinAlphabetLength = 26;
    this.shift = 65;  //for example A from 65 ascii to 0
  }

  encrypt(message , key) {
    this.isValid(message , key);
    let result = ''
    
    for(let i = 0, j = 0; i < message.length; i++) {

      const char = message[i].toUpperCase();
      
      if (!this.isLatinLetter(char)){
        result += char;
      } else {
        const charIndex = char.charCodeAt();
        const keyChar = key[ j%key.length ].toUpperCase();
        const keyIndex = keyChar.charCodeAt();
        
        let encryptedLetterIndex = ( (charIndex - this.shift) +  (keyIndex - this.shift)) % this.latinAlphabetLength;
        
        result += String.fromCharCode(encryptedLetterIndex + this.shift);
        j++;
      }
    }
    return this.reverseStr ? [...result].reverse().join('') : result;
  }    

  decrypt(message, key) {
    this.isValid(message , key);

    let result = ''
    
    for(let i = 0, j = 0; i < message.length; i++) {

      const char = message[i].toUpperCase();
      
      if (!this.isLatinLetter(char)){
        result += char;
      } else {
        const charIndex = char.charCodeAt();
        const keyChar = key[ j%key.length ].toUpperCase();
        const keyIndex = keyChar.charCodeAt();
        
        let encryptedLetterIndex = ( (charIndex - this.shift) + (this.latinAlphabetLength - keyIndex + this.shift)) % this.latinAlphabetLength;
        
        result += String.fromCharCode(encryptedLetterIndex + this.shift);
        j++;
      }
    }
    return this.reverseStr ? [...result].reverse().join('') : result;
  }

  isValid(message, key) {
    if (!message) {
      throw new Error(`The message is empty`);
    } 
    if (!key){
      throw new Error(`The key is empty`);
    }
  }

  /*Is Latin in Upper case from ASCII table
  */
  isLatinLetter(char) {
    const charIndex = char.charCodeAt();
    return charIndex >= 65 && charIndex <= 90 ? true : false;
  }
}

module.exports = VigenereCipheringMachine;
