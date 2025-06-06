// OpenWeatherMap API key (demo)
const apiKey = '16489e26ee91ff2f510227e657ff2fb2';

// Select DOM elements
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherResult = document.getElementById('weatherResult');

// Add click listener to fetch weather data
getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();

  if (!city) {
    alert('Please enter a city name');
    return;
  }

  // Show loading message
  weatherResult.innerHTML = '<p>⏳ Fetching weather data...</p>';

  // Fetch weather data from OpenWeatherMap
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error('❌ City not found or API error');
      }
      return response.json();
    })
    .then(data => {
      // Display formatted weather details
      weatherResult.innerHTML = `
        <h4>${data.name}, ${data.sys.country}</h4>
        <p>🌡 Temperature: <strong>${data.main.temp} °C</strong></p>
        <p>🌥 Condition: <strong>${data.weather[0].description}</strong></p>
        <p>💧 Humidity: <strong>${data.main.humidity}%</strong></p>
        <p>🌬 Wind Speed: <strong>${data.wind.speed} m/s</strong></p>
      `;
    })
    .catch(error => {
      weatherResult.innerHTML = `<p class="text-danger">${error.message}</p>`;
    });
});
