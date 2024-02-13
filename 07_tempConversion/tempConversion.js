const convertToCelsius = function(farenheit) {
  return +((farenheit-32) * (5/9) ).toFixed(1);
};

const convertToFahrenheit = function(celsius) {
  return +((9/5 * celsius) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
