const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }

  let numberMonth = date.getMonth();

  if (numberMonth == 11 || numberMonth < 2) {
    return 'winter';
  } else if (numberMonth > 1 && numberMonth < 5) {
    return 'spring';
  } else if (numberMonth > 4 && numberMonth < 8) {
    return 'summer';
  } else if (numberMonth > 7 && numberMonth < 11) {
    return 'autumn';
  } else {
    return 'Unable to determine the time of year!';
  }
};
