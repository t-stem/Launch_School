/* Create a function that calculates a person's body mass index (BMI). 
It should take two parameters: someone's height (in cm) and weight (in kg). 
The formula for calculating the BMI is as follows:

bmi = weightInKilograms / heightInMeters**2;

Note that formula requires a height in meters, but the function takes the height in centimeters (1 meter is equivalent to 100 centimeters).

Return the result as a string rounded to two decimals. For example:

*/

function calculateBMI(heightInCentimeters, weightInKilograms) {
    let heightInMeters = heightInCentimeters / 100; // correction: added to declare as variable with block scope rather than global scope
    return (weightInKilograms / heightInMeters ** 2).toFixed(2); // correction: added .toFixed() method to deliver correct output
}

console.log(calculateBMI(180, 80)); // "24.69"

