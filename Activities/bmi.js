var victorWeight = 57;
var victorHeight = 1.9;
var johnWeight = 55;
var johnHeight = 1.6;
//BMI Computation
var BMI = (weight, height) => weight / (height * height);
var johnBMI = BMI(johnWeight, johnHeight);
var victorBMI = BMI(victorWeight, victorHeight);
var JohnBMIHigher = johnBMI > victorBMI;

//Comparison
if (JohnBMIHigher) {
    console.log("John's BMI is higher.")
} else {
    console.log("Victor's BMI is higher.")
}

//User's BMI
console.log("John's BMI", johnBMI)
console.log("Victor's BMI", victorBMI)