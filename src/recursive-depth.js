const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let depth = 1;
      for (let element of arr) {
        if (Array.isArray(element)) {
          let newDepth = this.calculateDepth(element);
          if (depth < ++newDepth){
            depth = newDepth;	
          }
        }
      }

      return depth;
  } else {
    return 0;
  }
  }
};