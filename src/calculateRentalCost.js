/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const dayRental = 40;
const sevenDaysOff= 50;
const threeDaysOff= 20;

if(days === 1 ){

  let totalOneDay= days * 40

  return totalOneDay
} if(days >= 7){

 let totalSeven = days * dayRental - sevenDaysOff

return totalSeven
}if(days >=3 && days <= 6){

  let totalThree = days *dayRental - threeDaysOff
  return totalThree
}





}




 
