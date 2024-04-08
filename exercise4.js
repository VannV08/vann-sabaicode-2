// Exercise 4

const calculateBMI = function(weight, height) {
    let BMI = weight / (height * height);
    return BMI;
};

const myBMI = calculateBMI(80, 1.80);
const roundedAverage = Math.floor(myBMI);
console.log("My BMI is : " + myBMI);
