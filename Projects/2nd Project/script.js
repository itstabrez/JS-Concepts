const form = document.querySelector("form");
const button = document.querySelector("#reset");
const result = document.querySelector("#result");
form.addEventListener("submit", (e) => {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (height == " " || isNaN(height || height < 0)) {
    result.innerHTML = `${height} is not valid `;
  } else if (weight == " " || isNaN(weight || weight < 0)) {
    result.innerHTML = `${weight} is not valid `;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.style.color = "yellow";
      result.innerHTML = `<span>Your Body Mass Index is ${bmi}</span>, You are under weight`;
    }
    if (bmi > 24.9) {
      result.style.color = "red";
      result.innerHTML = `<span>Your Body Mass Index is ${bmi}</span>, You are over weight`;
    }
    if (bmi > 18.6 && bmi < 24.9) {
      result.style.color = "green";
      result.innerHTML = `<span>Your Body Mass Index is ${bmi}</span> & You are fit`;
    }
  }
  button.addEventListener("click", (e) => {
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";
    result.innerHTML = "";
  });
});
