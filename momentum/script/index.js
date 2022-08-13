'use stript';

// TIME and DATE
const time = document.querySelector('.time');
const date = document.querySelector('.date');

function showTimeDate() {
	function showTime() {
		const newDate = new Date();
		const currentTime = newDate.toLocaleTimeString();

		time.textContent = currentTime;
		setTimeout(showTime, 1000);
	}

	function showDate() {
		const newDate = new Date();
		const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
		const currentDate = newDate.toLocaleDateString('en-US', options);

		date.textContent = currentDate;
		setTimeout(showDate, 1000);
	}

	showTime();
	showDate();
}

showTimeDate();
////////////////////////////

// GREETINGS
const greeting = document.querySelector('.greeting');
const userName = document.querySelector('.name');

function getTimeOfDay() {
	const newDate = new Date();
	const hours = newDate.getHours();

	if (hours >= 6 && hours < 12) {
		return 'morning';
	} else if (hours >= 12 && hours < 18) {
		return 'afternoon';
	} else if (hours >= 18) {
		return 'evening';
	} else if (hours >= 0 && hours < 6) {
		return 'night';
	}
}
const timeOfDay = getTimeOfDay();

function showGreeting() {
	greeting.textContent = `Good ${timeOfDay}`;

	// Сораняем имя в local storage
	function setLocalStorage() {
		localStorage.setItem('name', userName.value);
	}

	window.addEventListener('beforeunload', setLocalStorage);
	////////////////////

	// Достаем имя из local storage
	function getLocalStorage() {
		if (localStorage.getItem('name')) {
			userName.value = localStorage.getItem('name');
		}
	}

	window.addEventListener('load', getLocalStorage);
	////////////////////

	setTimeout(showGreeting, 1000);
}

showGreeting();

////////////////////////////

// SLIDER

const body = document.querySelector('body');
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');

function getRandomNum() {
	let result = Math.floor(Math.random() * (20 - 01 + 1) + 01);
	return result;
}
let randomNum = getRandomNum();


function setBg() {
	let bgNum = String(randomNum).padStart(2, '0');
	const img = new Image();
	img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;

	img.onload = () => {
		body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
	};
	setTimeout(setBg, 2000);
}
setBg();

slidePrev.addEventListener('click', getSlidePrev);
function getSlidePrev() {
	if (randomNum === 1) {
		randomNum = 21;
	}
	randomNum -= 1;
	setBg();
}

slideNext.addEventListener('click', getSlideNext);
function getSlideNext() {
	if (randomNum === 20) {
		randomNum = 0;
	}
	randomNum += 1;
	setBg();
}

////////////////////////////

// WEATHER
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescript = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const errorWeather = document.querySelector('.weather-error');
const errorText = document.querySelector('.error-text');
const cityInput = document.querySelector('.city');


function errorMessageVisible() {
	errorWeather.classList.add('active');
	cityInput.classList.add('active');
}

function errorMessageHidden() {
	errorWeather.classList.remove('active');
	cityInput.classList.remove('active');
}

function setLocalStorageCity() {
	localStorage.setItem('city', cityInput.value);
}

window.addEventListener('beforeunload', setLocalStorageCity);

function getLocalStorageCity() {
	if (localStorage.getItem('city')) {
		cityInput.value = localStorage.getItem('city');
	}
}

window.addEventListener('load', getLocalStorageCity);

async function getWeather() {

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&lang=en&appid=e43b03b7f9011cbeaef0160a9bff32af&units=metric`;
	const res = await fetch(url);
	const data = await res.json();


	if (cityInput.value === '' || cityInput.value === ' ') {
		errorMessageVisible();
		errorText.textContent = 'To find something, you have to enter something. Try again 🙃';
	} else if (cityInput.value !== data.name) {
		if (data.name === undefined) {
			errorText.textContent = `Did you enter it correctly? 🤔 Try again.`;
			errorMessageVisible();
		} else {
			errorText.textContent = `Did you enter it correctly? 🤔 Again enter ${data.name}.`;
			errorMessageVisible();
		}
	} else {
		weatherIcon.className = 'weather-icon owf';

		weatherIcon.classList.add(`owf-${data.weather[0].id}`);
		temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
		weatherDescript.textContent = data.weather[0].description;
		windSpeed.textContent = `Wind speed: ${data.wind.speed.toFixed(0)} м/с`;
		humidity.textContent = `Humidity: ${data.main.humidity.toFixed(0)}%`;

		errorText.textContent = '';
		errorMessageHidden();
	}
}

document.addEventListener('DOMContentLoaded', getWeather);

function changeCity(e) {
	if (e.code === 'Enter') {
		getWeather();
	}
}

cityInput.addEventListener('keypress', changeCity);
////////////////////////////

// QUOTES
const quoteText = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.author');
const quoteBtn = document.querySelector('.change-quote');

function randomNumQuote() {
	let result = Math.floor(Math.random() * (20 - 01 + 1) + 01);
	return result;
}

let randomNumQuot = randomNumQuote();

quoteBtn.addEventListener('click', getChangeQuote);
function getChangeQuote() {

	if (randomNumQuot === 19) {
		randomNumQuot = 0;
	} else {
		randomNumQuot += 1;
	}
	getQuotes();
}

async function getQuotes() {
	const quotes = 'script/data.json';
	const res = await fetch(quotes);
	const data = await res.json();

	quoteText.textContent = data[randomNumQuot].text;
	quoteAuthor.textContent = data[randomNumQuot].author;

}

getQuotes();
////////////////////////////
