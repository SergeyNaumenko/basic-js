const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (isValidDate(date)) {
    const seasonMap = getSeasonMap();
    return seasonMap.get(date.getMonth());
  }
  return `Unable to determine the time of year!`;
};

const isValidDate = (date) => {
  if (!date) {
    return false;
  }

  if (Object.prototype.toString.call(date) !== `[object Date]`){
    throw new Error(`It's a not valid Date object`);
  }
  
  return true;
}

const getSeasonMap = () => {
  const seasonMap = new Map();
  seasonMap.set(0 , 'winter');
  seasonMap.set(1 , 'winter');
  seasonMap.set(2 , 'spring');
  seasonMap.set(3 , 'spring');
  seasonMap.set(4 , 'spring');
  seasonMap.set(5 , 'summer');
  seasonMap.set(6 , 'summer');
  seasonMap.set(7 , 'summer');
  seasonMap.set(8 , 'fall');
  seasonMap.set(9 , 'fall');
  seasonMap.set(10 , 'fall');
  seasonMap.set(11 , 'winter');

  return seasonMap;
}
