let inp = document.getElementById("inp");
let btn = document.getElementById("search-btn");
let img = document.getElementById("weather-img");
let temp = document.querySelector(".temprature");
let description = document.querySelector(".description");
let humidity= document.querySelector(".humidity");
let wind = document.querySelector(".wind-speed");
let notFound = document.querySelector(".not-found");
let weatherBody = document.querySelector(".weather-body");


async function checkWeather(city){

    let apikey = `01d2ac74885abf6b970a31c47de9642c`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    let data =  await fetch(`${url}`).then ((res)=>res.json());
    console.log(data);
    

    if (data.cod== "404"){
        notFound.style.display = "flex"
        weatherBody.style.display = "none"
    }else{
         notFound.style.display = "none"
        weatherBody.style.display = "flex"
        temp.innerHTML = `${Math.round(data.main.temp-273.15)} °C`;
        description.innerHTML = `${data.weather[0].description}`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed} Km/h`;


        switch(data.weather[0].main){
            case "Clear":
                img.src = "./assests/clear.png";
                break;

            case "Clouds":
                img.src = "./assests/cloud.png";
                break;
            case "Rain":
                img.src = "./assests/rain.png";
                break;
            case "Snow":
                img.src = "./assests/snow.png";
                break;  
                
            case "Mist":
                img.src = "./assests/mist.png";
                break;
        }
        
    }

}

btn.addEventListener("click", () =>{
    checkWeather(inp.value);
})
