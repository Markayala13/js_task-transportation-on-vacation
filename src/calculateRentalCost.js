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

  const totalOneDay= days * 40

  return totalOneDay
} if(days >= 7){

 const totalSeven = days * dayRental - sevenDaysOff

return totalSeven
}if(days >=3 && days < 7){

  const totalThree = days *dayRental - threeDaysOff
  return totalThree
}





}




 
