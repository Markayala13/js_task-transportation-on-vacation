/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // Definir constantes de precios y descuentos
  const dayRental = 40;
  const sevenDaysOff = 50;
  const threeDaysOff = 20;

  if (days === 1) {
    return days * dayRental; 
  }
  
  if (days >= 7) {
    return days * dayRental - sevenDaysOff; 
  }

  if (days >= 3 && days < 7) {
    return days * dayRental - threeDaysOff; 
  }
}





 
