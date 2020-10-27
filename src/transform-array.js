const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error(`It is not an array`);
  }

  const result = [];
  const length = arr.length;
  const {
    discardNext,
    discardPrev,
    doubleNext,
    doublePrev
  } = getControls();

  for (let i = 0; i < length; i++){
    
    switch(arr[i]){
      case discardPrev: {
        if( result.length > 0 && arr[ i - 2] !== discardNext) {
          result.pop();
        }
        break;
      }
      case discardNext: {
        i++;
        continue;
      }
      case doublePrev: {
        if(result.length > 0 && arr[ i - 2] !== discardNext) {
          result.push(arr[ i - 1 ]);
        } break;
      }
      case doubleNext: {
        if (i !== length - 1 ){
          result.push(arr[ i + 1]);
        }
        break;
      }
      default: result.push(arr[i]);
    }
  }

  return result;
};

const getControls = () => {
  return {
    discardNext: `--discard-next`,
    discardPrev: `--discard-prev`,
    doubleNext: `--double-next`,
    doublePrev: `--double-prev`
  }
}