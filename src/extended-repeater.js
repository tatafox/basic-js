const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    
  let resultStr = '';
    
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }  
  if (options.separator === undefined) { 
    options.separator = '+';
  }  
  if (options.addition === undefined) { 
    options.addition = '';
  }  
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator == '';
  }  

  for (let i = 0; i < options.repeatTimes; i++) {
   
    resultStr += String(str)
    
    for (let j = 0; j < options.additionRepeatTimes; j++) {
      j < options.additionRepeatTimes-1 
      ? resultStr += String(options.addition) + String(options.additionSeparator)
      : resultStr += String(options.addition);
      
    }

    if (i < options.repeatTimes-1) { 
      resultStr +=  String(options.separator);
    } 
  }

  return resultStr;
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
  