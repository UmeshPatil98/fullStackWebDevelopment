function removeDuplicates(cart) {
    const uniqueCart = [];
  
    cart.forEach(item => {
      if (!uniqueCart.includes(item)) {
        uniqueCart.push(item);
      }
    });
  
    return uniqueCart;
  }
  
  // Example usage
  const shoppingCart = ['apple', 'orange', 'banana', 'apple', 'grape', 'orange'];
  const uniqueItems = removeDuplicates(shoppingCart);
  console.log('Shopping Cart:', shoppingCart);
  console.log('Unique Items:', uniqueItems);
  