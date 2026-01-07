const convertToCelsius = function (fahreinheitNum) {
  if (fahreinheitNum == 32) return 0;
  let celcius = (fahreinheitNum - 32) * 5 / 9;
  return Math.round(celcius * 10) / 10;
}

const convertToFahrenheit = function (celciusNum) {
  if (celciusNum == 0) return 32;
  let fahrenheit = (celciusNum * 1.8) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
