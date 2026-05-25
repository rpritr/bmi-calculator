
const form = document.getElementsByTagName('form')[0];
const submit = document.getElementsByClassName("main__form__button")[0];
const bmiElement = document.getElementsByClassName("main__results__result--bmi--value")[0];
const results = document.getElementsByClassName("main__results__result")[0];
const cards = document.getElementsByClassName("main__results__cards")[0];
const empty = document.getElementsByClassName("main__results__empty")[0];
const stateElement = document.querySelector(".main__results__result--state span");
results.style.display = "none";
cards.style.display = "none";
console.log(stateElement);

function getStateFromBMI(bmi)
{
    let state = "";
    if(bmi < 18.5) {
        state = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        state = "Normal weight"
    }
    else if (bmi > 25 && bmi <= 29.9) {
        state = "Overweight"
    }
    else {
        state = "Obese";
    }
    return state;
}
function setColorFromState(state) {
    if(state === "Underweight"){
        stateElement.className = "low-warning";
    } else if (state === "Normal weight"){
        stateElement.className = "normal";
    } else if (state === "Overweight"){
        stateElement.className = "warning";
    } else if (state === "Obese"){
        stateElement.className = "danger";
    }

}
function setSelectedState(state) {
    document.getElementById("low").classList.remove("selected");
    document.getElementById("normal").classList.remove("selected");
    document.getElementById("overweight").classList.remove("selected");
    document.getElementById("obese").classList.remove("selected");

    if(state === "Underweight"){
        document.getElementById("low").classList.add("selected");
    } else  if(state === "Normal weight"){
        document.getElementById("normal").classList.add("selected");
    } else if(state === "Overweight"){
        document.getElementById("overweight").classList.add("selected");
    } else if(state === "Obese"){
        document.getElementById("obese").classList.add("selected");
    }
}

submit.addEventListener('click', function(e) {
    e.preventDefault();
    const height = form.elements.height.value;
    const weight = form.elements.weight.value;

    console.log(height);
    console.log(weight);

    const bmi = weight / ((height/100) * (height/100));

    console.log(bmi);
    bmiElement.innerHTML = bmi.toPrecision(4);
    console.log(bmiElement);
    results.style.display = "flex";
    cards.style.display = "flex";
    empty.style.display = "none";
    console.log(getStateFromBMI(bmi));
    stateElement.innerHTML = getStateFromBMI(bmi);
    setColorFromState(getStateFromBMI(bmi));
    setSelectedState(getStateFromBMI(bmi));
})
