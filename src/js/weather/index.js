
import { format } from 'date-fns';

const WEATHER_KEY = '8f21c518411d30fb59eece5d06557a72';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const refs = {
  degs: document.querySelector('.weather__deg'),
  weather: document.querySelector('.weather__value'),
  city: document.querySelector('.weather__city'),
  day: document.querySelector('.weather__day'),
  year: document.querySelector('.weather__year'),
  img: document.querySelector('.weather__img'),
};

async function fetchWeatherByGeo(lat, lon) {
  const url = `${BASE_URL}lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function renderWeater() {
  const { coords } = await getCurrentPosition();
  const data = await fetchWeatherByGeo(coords.latitude, coords.longitude);
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

async function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

renderWeater();