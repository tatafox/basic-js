const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor(reverse = true) {
    this.reverse = reverse,
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }



  
   encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }

    let alph = this.alphabet;

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '',
        j = 0;

    for (let i = 0; i < message.length; i++) {
      if (alph.indexOf(message[i].toUpperCase()) > -1) {
        let keyLetterNumber = j % key.length;
        let letterNumber = (alph.indexOf(message[i]) + alph.indexOf(key[keyLetterNumber])) % 26;
        result += alph[letterNumber];
        j++;
      } else {
        result += message[i];
      }
    }

    if (!this.reverse) {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
  }    
  




  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error();
    }

    let alph = this.alphabet;

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '',
        j = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/^[A-Z]$/)) {
        let keyLetterNumber = j % key.length;
        let letterNumber = (alph.indexOf(message[i]) + 26 - this.alphabet.indexOf(key[keyLetterNumber])) % 26;
        result += this.alphabet[letterNumber];
        j++;
      } else {
        result += message[i];
      }
    }

    if (!this.reverse) {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
  }
}

module.exports = VigenereCipheringMachine;
