const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
/* use 10th formula from 
*https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#mjx-eqn-21.4.6
*/
module.exports = function dateSample(sampleActivity) {
  if (!isValid()) {
    return false;
  }
 
  const k = Math.LN2 / HALF_LIFE_PERIOD;
  const numberOfAtomsRelationship = MODERN_ACTIVITY / parseFloat(sampleActivity);
  const age = Math.log10(numberOfAtomsRelationship)/k;

  return Math.ceil(age);
};

const isValid = (data) => {
  if (typeof data !== 'string'){
    return false;
  }
  if(isNaN(parseFloat(data))) {
    return false;
  }
  return true;
}