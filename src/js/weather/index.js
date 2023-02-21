import { format } from 'date-fns';

// Store the API key, default city and base URL for the OpenWeatherMap API in constants
const WEATHER_KEY = '8f21c518411d30fb59eece5d06557a72';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const SEARCH_CITY = 'Kyiv';
// Create an empty object to store references to DOM elements
let refs = {};

// Define an asynchronous function to get references to DOM elements and then render the weather
async function getWeatherRefs() {
  // Find DOM elements by class and add them to the refs object
  refs = {
    degs: document.querySelector('.weather__deg'),
    weather: document.querySelector('.weather__value'),
    city: document.querySelector('.weather__city'),
    day: document.querySelector('.weather__day'),
    year: document.querySelector('.weather__year'),
    img: document.querySelector('.weather__img'),
  };

  // Call the renderWeather and getGeoposition functions, then return the refs object
  renderWeather();
  getGeoposition();
  return refs;
}

// Define an asynchronous function to fetch the weather for a given location
async function fetchWeather() {
  // Construct the API URL with the location, temperature units, and API key
  const url = `${BASE_URL}q=${SEARCH_CITY}&units=metric&appid=${WEATHER_KEY}`;

  try {
    // Send a request to the OpenWeatherMap API with the constructed URL
    const response = await fetch(url);
    // Parse the response as JSON data and return it
    const data = await response.json();
    return data;
  } catch (error) {}
}

// function to fetch weather data using geolocation
async function fetchWeatherByGeo(lat, lon) {
  const url = `${BASE_URL}lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
}

// function to render the weather data on the page
async function renderWeather() {
  // fetch weather data for default location
  const data = await fetchWeather();
  const { feels_like } = data.main;
  const weather = data.weather[0];
  const { icon } = data.weather[0];
  refs.degs.textContent = `${Math.floor(feels_like)}°`;
  refs.weather.textContent = weather.main;
  refs.city.textContent = data.name;

  refs.day.textContent = format(new Date(), 'eee');
  refs.year.textContent = format(new Date(), 'dd LLL y');
  refs.img.setAttribute(
    'src',
    `https://openweathermap.org/img/wn/${icon}@4x.png`
  );
}

async function getGeoposition() {
  // Check if geolocation is available
  if (navigator.geolocation) {
    // Get the current position of the user
    await navigator.geolocation.getCurrentPosition(
      // Extract the latitude and longitude from the position object
      ({ coords: { latitude, longitude } }) => {
        // Fetch weather data using the latitude and longitude values
        fetchWeatherByGeo(latitude, longitude).then(data => {
          // Extract the temperature and weather data from the API response
          const { temp } = data.main;
          const weather = data.weather[0];
          const { icon } = data.weather[0];

          // Update the DOM with the weather data
          refs.degs.textContent = `${Math.floor(temp)}°`;
          refs.weather.textContent = weather.main;
          refs.city.textContent = data.name;
          refs.day.textContent = format(new Date(), 'eee');
          refs.year.textContent = format(new Date(), 'dd LLL y');
          refs.img.setAttribute(
            'src',
            `https://openweathermap.org/img/wn/${icon}@4x.png`
          );
        });
      }
    );
  }
  // Return nothing if geolocation is not available
  return;
}

// Call the function to get the weather data
window.addEventListener('load', function () {
  setTimeout(getWeatherRefs, 1000);
});

// Call the function when the width of the window changes

// window.addEventListener('resize', function() {
//   setTimeout(getWeatherRefs, 1000);
// });


export { getWeatherRefs };
