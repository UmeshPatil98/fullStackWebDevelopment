function printInvertedRightAngleTriangle(height) {
    for (let i = height; i >= 1; i--) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  
  // Example usage
  printInvertedRightAngleTriangle(6);
  