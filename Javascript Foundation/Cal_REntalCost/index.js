function calculateRentalCost(daysRented, carType) {
    let rentalCost = 0;
  
    switch (carType) {
      case 'economy':
        rentalCost = 4000;
        break;
      case 'midsize':
        rentalCost = 10000;
        break;
      case 'luxury':
        rentalCost = 20000;
        break;
      default:
        console.log('Invalid car type');
        return;
    }
  
    const totalCost = rentalCost * daysRented;
    return totalCost;
  }
  
  
  const daysRented = 7;
  const carType = 'economy';
  const rentalCost = calculateRentalCost(daysRented, carType);
  console.log(`Total rental cost: ${rentalCost}`);
  