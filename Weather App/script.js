const API_KEY = "424180983794487eb4865302260302"
const BASE_URL = "http://api.weatherapi.com/v1/current.json"

// =========== Taking input ==========

const inputElem = document.querySelector("input");
const buttonElem = document.querySelector("#search");
const error = document.querySelector(".error-message");

const fetchWeather = async (location) => {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${location}`)
    const data = await response.json();

    if(response.status == 400){
        error.textContent = "Invalid Location";
    } else if(response.status == 200){
        error.textContent = "";
        return data
    }
}

const updateDOM = (temp, city, country, time, date, condition, conditionImg) => {
    const tempEle = document.querySelector(".temperature");
    const locEle = document.querySelector(".location");
    const timeEle = document.querySelector(".time");
    const dateEle = document.querySelector(".date");
    const conditionEle = document.querySelector(".condition");
    const conditionImgEle = document.querySelector("#condition-img");
    
    tempEle.textContent = `${temp}°C`;
    locEle.textContent = city + ", " + country;
    timeEle.textContent = time;
    dateEle.textContent = date;
    conditionEle.textContent = condition;
    conditionImgEle.setAttribute("src", conditionImg);
    errorEle.textContent = ""
}

async function main() {
    const location = inputElem.value.trim();

    //call the API ->
    const data = await fetchWeather(location);

    //update the DOM
    updateDOM(
        data.current.temp_c, 
        data.location.name,
        data.location.country,
        data.location.localtime.split(" ")[1],
        data.location.localtime.split(" ")[0],
        data.current.condition.text,
        data.current.condition.icon
    )

    inputElem.value="";
}

inputElem.value = "Delhi India";
main();
inputElem.value = "";

buttonElem.addEventListener("click", main);