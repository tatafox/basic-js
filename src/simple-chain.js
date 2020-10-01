const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrChain: [],

  getLength() {
    return this.arrChain.length;
  },


  addLink(value) {
    if (value !== undefined) {
      this.arrChain.push(`( ${value} )`);
    } else {
      this.arrChain.push(`( )`);
    }
    return this;
  },


  removeLink(position) {
    if (typeof(position) !== 'number' 
        || position < 1 
        || position >= this.arrChain.length) {
      this.arrChain = [];
      throw new Error;
    } else {
      this.arrChain.splice(position - 1, 1);
      return this;
    }
  },


  reverseChain() {
    this.arrChain.reverse();
    return this;
  },


  finishChain() {
    let strChain = this.arrChain.join('~~');
    this.arrChain = [];
    return strChain;
  }
};

module.exports = chainMaker;
