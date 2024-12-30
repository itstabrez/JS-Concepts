const form = document.querySelector("form");
const inputBoxes = document.querySelectorAll(".inputGroup")

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");
    
    if (height === '' || height < 0 || isNaN(height) || weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please Input Valid Height Or Weight';
        result.style.color = 'red';     
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>Your BMI is ${bmi}</span> `;
        result.style.color = 'green';       
    }

})