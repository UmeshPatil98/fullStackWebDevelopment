function calculateBill(costPerDish, numberOfPeople) {
    const totalBill = costPerDish.reduce((acc, curr) => acc + curr, 0);
    const billPerPerson = totalBill / numberOfPeople;
  
    const billSplit = {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  
    return billSplit;
  }
  
  
  const costPerDish = [25, 15, 10, 12, 8]; // Cost of each dish
  const numberOfPeople = 4; // Number of people sharing the bill
  const billSplit = calculateBill(costPerDish, numberOfPeople);
  console.log('Total Bill:', billSplit.totalBill);
  console.log('Bill Per Person:', billSplit.billPerPerson);
  