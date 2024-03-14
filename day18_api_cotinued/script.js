let city_name = document.getElementById("city_name");
let btn = document.getElementById("search");
let API_Key = "a631f90b4aeaba1c49c7bd8b64d73a5c";

async function fetchData(){
    // console.log(city_name.value);
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=03a094de2fbed757402784c8ab602833`)

    console.log(response);

    let data = await response.json();
    console.log(data);
    displayData(data);
}

function displayData(data){
    
}

btn.addEventListener('click', fetchData);