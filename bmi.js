/* 
BMI=HEIGHT/WEIGHT^2

UNDER WEIGHT= UNDER 18.5
HEALTHY= 18.5-24.9
OVER WEIGHT= 25-29.9
OBESITY= 30-39.9
SEVERE OBESITY= 40 OR OVER
*/

//this usecase will give you empty values
let height = document.querySelector("#height");

let body = document.querySelector("body");
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#result");

  if (height === " " || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === " " || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.5) {
      result.innerHTML = `Your BMI is ${bmi}, Condition = Under Weight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML = `Your BMI is ${bmi}, Condition = healthy`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.innerHTML = `Your BMI is ${bmi}, Condition = Over Weight`;
    } else if (bmi >= 30 && bmi <= 39.9) {
      result.innerHTML = `Your BMI is ${bmi}, Condition = Obesity`;
    } else if (bmi >= 40) {
      result.innerHTML = `Your BMI is ${bmi}, Condition = Severe Obesity`;
    }
  }
});
