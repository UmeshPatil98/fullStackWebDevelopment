function doubleItemQuantities(cart) {
    const doubledCart = cart.map(quantity => quantity * 2);
    return doubledCart;
  }
  
  // Example usage
  const cart = [1, 2, 3, 4];
  const correctedCart = doubleItemQuantities(cart);
  console.log('Cart:', cart);
  console.log('Corrected Cart:', correctedCart);
  