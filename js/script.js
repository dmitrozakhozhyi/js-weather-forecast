const apiKey = '8bd3432b4081bb6f2107b4f86f8072db'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { name, main, weather } = data;

      const icon = `https://openweathermap.org/img/w/${weather[0].icon}.png`;
      const description = weather[0].description;
      const temperature = Math.round(main.temp);
      const feelsLike = Math.round(main.feels_like);
      const humidity = main.humidity;
      const wind = Math.round(data.wind.speed);

      const weatherElement = document.querySelector('.weather__container');
      weatherElement.innerHTML = `
      <div class="weather">
        <div class="weather__head">
          <h2 class="weather__title">${name}</h2>
          <div class="weather__descr"><img src="${icon}" alt="${description}"> ${description}</div>
        </div>
        <ul class="weather__list">
          <li class="weather__list-item"><i class="fas fa-thermometer-half"></i> <span class="name">Temperature:</span> <span class="value">${temperature}°C</span></li>
          <li class="weather__list-item"><i class="fas fa-temperature-low"></i> <span class="name">Feels like:</span> <span class="value">${feelsLike}°C</span></li>
          <li class="weather__list-item"><i class="fas fa-tint"></i> <span class="name">Humidity:</span> <span class="value">${humidity}%</span></li>
          <li class="weather__list-item"><i class="fas fa-wind"></i> <span class="name">Wind:</span> <span class="value">${wind} km/h</span></li>
        </ul>
      </div>
      `;
    })
    .catch(error => {
      console.log(error);
      const weatherDiv = document.getElementById('weather');
      weatherDiv.innerHTML = '<p>Error fetching weather data</p>';
    });
}
