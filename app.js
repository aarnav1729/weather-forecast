API_KEY = "d7a7d22df9580931b2510feab85d7ee0";
const form = document.querySelector("form");
const input = document.querySelector("input");
const weatherContainer = document.querySelector("#weather");

form.addEventListener("submit", (event) => 
{
  event.preventDefault();

  const cityName = input.value.trim();

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((data) => 
    {
      console.log(data); // log the data received from the API for debugging purposes

      const cityName = data.name;

      const temperatureCelsius = data.main.temp;
      const temperatureFahrenheit = ((temperatureCelsius * 9/5) + 32).toFixed(2);

      const description = data.weather[0].description;

      weatherContainer.innerHTML = `
      <div id="weather-container">
        <h2>Weather in ${cityName}</h2>
        <p>Temperature: ${temperatureCelsius} &deg;C / ${temperatureFahrenheit} &deg;F</p>
        <p>Description: ${description}</p>
      </div>
    `;    
    })

    .catch((error) => 
    {
      console.error(error);
      weatherContainer.innerHTML = "<p>Unable to retrieve weather data.</p>";
    });
});
