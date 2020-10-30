const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    for (let i = 0; i < arr.length; i++ ) {
      if (Array.isArray(arr[i])) {
        let newDepth = this.calculateDepth(arr[i]);
        if (maxDepth <= newDepth) {
          maxDepth = newDepth + 1;
        }
      }
    }

    return maxDepth;
  }
};