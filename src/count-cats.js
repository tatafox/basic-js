const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix ) {
  //throw new CustomError('Not implemented');
  let count = 0;
  let row;
  let column;

  for(row of matrix) {
    for(column of row) {
      if (column === '^^')
        count++
    }
  }

  return count;
};
