function bmi(weight, height) {
 const calcBmi = weight/Math.pow(height, 2)

console.log(calcBmi)
return calcBmi
   
}
bmi(100, 5.7)
   

module.exports = bmi;