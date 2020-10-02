const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) {
    return 0;
  }
  
  return matrix.reduce((acc, arr) => {
    if (Array.isArray(arr) && matrix.length > 0) {
      arr.forEach(item => {
        if (String(item) === "^^"){
          acc++;
        }
      })  
    }

    return acc;
  }, 0);
};
