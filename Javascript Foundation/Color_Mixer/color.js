function mixColors(color1, color2) {
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();
  
    switch (color1) {
      case 'red':
        switch (color2) {
          case 'red':
            return 'Red';
          case 'blue':
            return 'Purple';
          case 'yellow':
            return 'Orange';
          default:
            return 'Invalid color';
        }
      case 'blue':
        switch (color2) {
          case 'red':
            return 'Purple';
          case 'blue':
            return 'Blue';
          case 'yellow':
            return 'Green';
          default:
            return 'Invalid color';
        }
      case 'yellow':
        switch (color2) {
          case 'red':
            return 'Orange';
          case 'blue':
            return 'Green';
          case 'yellow':
            return 'Yellow';
          default:
            return 'Invalid color';
        }
      default:
        return 'Invalid color';
    }
  }
  
  // Example usage
  console.log(mixColors('red', 'blue')); // Output: Purple
  console.log(mixColors('blue', 'yellow')); // Output: Green
  console.log(mixColors('yellow', 'red')); // Output: Orange
  console.log(mixColors('green', 'red')); // Output: Invalid color
  