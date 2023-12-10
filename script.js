function validateInput() {
    const inputField = document.getElementById("temperatureInput");
    inputField.value = inputField.value.replace(/[^0-9.]/g, "");
  }
  
  function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitSelector = document.getElementById("unitSelector");
    const selectedUnit = unitSelector.options[unitSelector.selectedIndex].value;
    let result;
  
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid number for temperature.");
      return;
    }
  
    if (selectedUnit === "celsius") {
      result = convertToCelsius(temperatureInput);
    } else if (selectedUnit === "fahrenheit") {
      result = convertToFahrenheit(temperatureInput);
    } else {
      result = convertToKelvin(temperatureInput);
    }
  
    displayResult(result, selectedUnit);
  }
  
  function convertToCelsius(temperature) {
    return (temperature - 32) * (5 / 9);
  }
  
  function convertToFahrenheit(temperature) {
    return (temperature * 9 / 5) + 32;
  }
  
  function convertToKelvin(temperature) {
    return temperature + 273.15;
  }
  
  function displayResult(result, unit) {
    const resultContainer = document.getElementById("resultContainer");
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Converted Temperature: ${result.toFixed(2)} ${unit.toUpperCase()}`;
    resultContainer.style.display = "block";
  }
  