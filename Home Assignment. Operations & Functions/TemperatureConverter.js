function convertToKelvin(tempCelsius) {
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

console.log(convertToKelvin(1));


function convertToKelvin(tempFahrenheit) {
    let tempCelsius = (tempFahrenheit - 32) / 1.8;
    let tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

console.log(convertToKelvin(95));


function convertToKelvin(tempFahrenheit) { //alternative
    let tempKelvin = ((((tempFahrenheit) - 32) * 5) / 9) + 273.15;
    return tempKelvin;
}

console.log(convertToKelvin(95));


function convertToKelvin(tempFahrenheit) { //alternative
    let tempKelvin = ((tempFahrenheit) + 459.67) / 1.8;
    return tempKelvin;
}

console.log(convertToKelvin(95));