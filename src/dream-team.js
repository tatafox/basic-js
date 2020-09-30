const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) && members.length != 0) {
    let name = [];
    members.forEach((element) => {
      if (typeof element === 'string') {
        name.push(element.trim()[0].toUpperCase())
      }
    })  
    return name.sort().join('');
  } else {
    return false;
  }

};


