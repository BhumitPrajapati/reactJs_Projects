const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // console.log(`height: ${height}, Weight: ${weight}`);

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid results ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid results ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      results.innerHTML = `<h3>Your Weight Is Under Weight which is ${bmi}</h3>`;
    } else if (bmi <= 18.6 || bmi <= 24.9) {
      results.innerHTML = `<h3>Your Weight Is In Noraml Range which is ${bmi}</h3>`;
    } else {
      results.innerHTML = `<h3>Your are Over Weight which is ${bmi}</h3>`;
    }
  }
});
