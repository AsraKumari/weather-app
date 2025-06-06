# 🌤️ Weather App

Welcome to the **Weather App** — a sleek, modern, and responsive web application that fetches real-time weather data for any city worldwide! Built with **HTML**, **CSS** (glassmorphism style ✨), and **JavaScript** using the reliable OpenWeatherMap API.


[Live Demo]: (https://asrakumari.github.io/weather-app/)
---

## 🚀 Features

- 🌍 **Get weather updates worldwide** — just enter any city name!  
- 🌡️ See temperature in Celsius with weather conditions, humidity, and wind speed  
- 💎 Beautiful **glassmorphism design** with smooth shadows and gradients for a modern look  
- 📱 Fully **responsive layout** — works perfectly on desktop and mobile screens  
- ⏳ Loader animation while fetching data for smooth UX  
- ⚠️ Input validation — prompts if city name is empty or invalid  
- 💾 API call count persists using **localStorage** (optional feature) to keep track across page reloads  
- 🔄 Smooth transitions when displaying updated weather data

---

## 🗃️ API Details

This app uses the **OpenWeatherMap API** to fetch real-time weather data. Here's a brief overview:

- **API Provider:** [OpenWeatherMap](https://openweathermap.org/)  
- **API Endpoint Used:** Current Weather Data endpoint  
- **Data Provided:** Temperature, weather conditions, humidity, wind speed, and weather icons  
- **API Key:** Required (free to obtain by signing up on OpenWeatherMap)  
- **Request Format:** City name passed as a query parameter  
- **Response Format:** JSON  

The app fetches weather data dynamically based on user input and updates the UI accordingly.

---

## ⚠️ Important API Usage & Privacy Notice

This Weather App uses a **temporary/demo API key** for demonstration purposes only. Please note the following:

- The provided API key is **not intended for public or production use**. It may be disabled or deleted at any time if misuse is detected.  
- For your own projects, we **strongly recommend creating your own free API key** by registering at [OpenWeatherMap](https://openweathermap.org/api). This ensures you have full control over your usage and privacy.  
- Using your own API key helps protect your data and avoids potential interruptions caused by unauthorized use of a shared key.  
- This demo API key does **not collect or store any personal data** through this app, but misuse could lead to key revocation.  
- You are responsible for complying with the API provider’s terms of service when using your own key.  

Please visit the OpenWeatherMap website, create a free account, generate your personal API key, and replace the placeholder key in the app’s `script.js` file before using this app extensively or in production.

---

## 🎬 How to Use

1. Clone or download this repo  
2. Register for a free API key at [OpenWeatherMap](https://openweathermap.org/api)  
3. Open the `script.js` file and replace the `apiKey` variable with your own API key  
4. Open `index.html` in your favorite web browser  
5. Type any city name into the input box and click **Get Weather**  
6. See live weather data displayed instantly!

--By Asra Kumari
