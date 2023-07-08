const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    const roundedPercentage = Math.round(discountPercentage * 100) / 100; // Round off to two decimal places
    return roundedPercentage ;
  };
  
  // Example usage
  const originalPrice = 100;
  const discountedPrice = 44;
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log('Discount Percentage:', discountPercentage + '%');
  