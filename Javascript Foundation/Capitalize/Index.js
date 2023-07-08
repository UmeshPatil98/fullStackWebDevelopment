function capitalizeName(name) {
    const firstLetter = name.charAt(0);
    const capitalizedFirstLetter = firstLetter.toUpperCase();
  
    return firstLetter === capitalizedFirstLetter
      ? name
      : capitalizedFirstLetter + name.slice(1);
  }
  
  // Example usage
  console.log(capitalizeName('john')); // Output: John
  console.log(capitalizeName('emma')); // Output: Emma
  console.log(capitalizeName('alexander')); // Output: Alexander
  console.log(capitalizeName('SOPHIA')); // Output: SOPHIA
  