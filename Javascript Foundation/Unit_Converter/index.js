function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
  }
  
  // fahrenheit to celsius = (f-32)*5/9

  const celsius = 25;
  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
  