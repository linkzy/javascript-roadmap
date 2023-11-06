function convertToCelsiusToFahrenheit(temperatureInCelsius) {
    // Constant multiplier for converting Celsius to Fahrenheit
    const multiplier = 9 / 5;
  
    // Calculate the temperature in Fahrenheit and store it in a variable declared with 'var'
    var temperatureInFahrenheit = temperatureInCelsius * multiplier + 32;
  
    return temperatureInFahrenheit;
  }
  
  // Reassign the 'var' variables for potential reuse
  var celsiusTemperature = 25;
  var fahrenheitTemperature = convertToCelsiusToFahrenheit(celsiusTemperature);
  
  console.log(celsiusTemperature + "°C is equal to " + fahrenheitTemperature + "°F");
  
  // You can reuse 'celsiusTemperature' and 'fahrenheitTemperature' for other conversions
  celsiusTemperature = 30;
  fahrenheitTemperature = convertToCelsiusToFahrenheit(celsiusTemperature);
  
  console.log(celsiusTemperature + "°C is equal to " + fahrenheitTemperature + "°F");  