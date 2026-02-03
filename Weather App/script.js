const API_KEY = "424180983794487eb4865302260302"
const BASE_URL = "http://api.weatherapi.com/v1/current.json"

// =========== Taking input ==========

const inputElem = document.querySelector("input");
const buttonElem = document.querySelector("#search");
const error = document.querySelector(".error-message");

async function main() {
    const location = inputElem.value.trim();

    //call the API ->
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${location}`)
    const data = await response.json();

    if(response.status == 400){
        error.textContent = "Invalid Location";
    }

    //update the DOM
    const temp = document.querySelector(".temperature");
    const loc = document.querySelector(".location");
    const time = document.querySelector(".time");
    const date = document.querySelector(".date");
    const condition = document.querySelector(".condition");
    const conditionImg = document.querySelector("#condition-img");

    if(response.status == 200){
        temp.textContent = `${data.current.temp_c}°C`;
        loc.textContent = data.location.name + ", " + data.location.country;
        time.textContent = data.location.localtime.split(" ")[1];
        date.textContent = data.location.localtime.split(" ")[0];
        condition.textContent = data.current.condition.text;
        error.textContent = ""
        conditionImg.setAttribute("src", data.current.condition.icon);
    }

    inputElem.value="";
}


buttonElem.addEventListener("click", main);

