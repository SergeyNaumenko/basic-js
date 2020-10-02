const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length === 0) {
    return false;
  }

  const str = members.reduce((acc, userName) => {
    if( typeof userName === "string"){
      acc += userName.trim().toUpperCase()[0];
    }
    return acc;
  }, "");

  return str.split("").sort().join("");
};
