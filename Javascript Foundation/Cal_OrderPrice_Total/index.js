const calculateTotalCost = (cart) => {
    let totalCost = 0;
  
    cart.forEach((item) => {
      const { unitPrice, quantity } = item;
      const itemCost = unitPrice * quantity;
      totalCost += itemCost;
    });
  
    return totalCost;
  };
  

  const cart = [
    { unitPrice: 10, quantity: 2 },
    { unitPrice: 5, quantity: 4 },
    { unitPrice: 8, quantity: 3 },
  ];
  const totalCost = calculateTotalCost(cart);
  console.log('Total Cost:', totalCost);
  