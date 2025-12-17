const apiKey = ("e2b3c19d8a4b75f6abc12345def67890");

async function getWeather() {
  let city = document.getElementById("cityInput").Value; 
  
  if(city === "") {
    alert("Please enter a city name");
    return;
  }

  let url =
   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=met
   ric`;

  let response = await fetch(url);
  let data = await response.json();

  if (data.cod === "404") {
    document.getElementById("weatherResult").innerHTML = "<p>City not found!</P>";
    return;
  }

    document.getElementById("weatherResult").innerHTML = `
    <h3>${data.name}, ${data.sys.country}</h3>

    <p class="temp">${data.main.temp}°C</p>
    
    <p>Weather: ${data.weather[0].main}</p>

    <p>Humidity: ${data.main.humidity}%</p>

    <p>Wind: ${data.wind.speed} m/s</p>
    `;
  }
