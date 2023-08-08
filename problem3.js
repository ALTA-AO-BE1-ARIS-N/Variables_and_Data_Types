// problem 3"
// 1. mencari Celsius to Fahrenheit: F = C * 9/5 + 32
//    mencari Celsius to Kelvin: K = C + 273.15
// 2. mencari Fahrenheit to Celsius: C = (F - 32) * 5/9
//    mencari Fahrenheit to Kelvin: K = (F + 459.67) * 5/9
// 3. mencari Kelvin to Celsius: C = K - 273.15
//    mencari Kelvin to Fahrenheit: F = K * 9/5 - 459.67

let Celcius = 25
let fahrenheit = 25
let Kelvin = 25

let F = (Celcius * 9/5 + 32);{
    let K = (Celcius + 273.15);

    console.log("25 Celcius is equal to" + F + "fahrenheit and" + K + "Kelvin");
}

let C = ((fahrenheit - 32) * 5/9);{
    let K = ((fahrenheit + 459.67) * 5/9)

    console.log("25 fahrenheit is equal to" + C + "celcius and" + K + "kelvin");
}

let c = (Kelvin - 273.15);{
    let F = (Kelvin * 9/5 - 459.67)

    console.log("25 kelvin is equal to" + c + "celcius and" + F + "fahrenheit");
}
