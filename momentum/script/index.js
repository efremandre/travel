'use stript';
import playList from './playlist.js';


// TIME and DATE
const time = document.querySelector('.time');
const hourse = document.querySelector('.hourse');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const date = document.querySelector('.date');

function showTimeDate() {
	function showTime() {
		const newDate = new Date();
		const currentHours = newDate.getHours();
		const currentMinutes = newDate.getMinutes();
		const currentSeconds = newDate.getSeconds();

		hourse.textContent = `${String(currentHours).padStart(2, '0')}:`;
		minutes.textContent = `${String(currentMinutes).padStart(2, '0')}:`;
		seconds.textContent = String(currentSeconds).padStart(2, '0');
		setTimeout(showTime, 1000);
	}

	function showDate() {
		const newDate = new Date();
		const options = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };
		const currentDate = newDate.toLocaleDateString('ru-RU', options);

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
	if (timeOfDay === 'morning') {
		greeting.textContent = 'Доброе утро, ';
	} else if (timeOfDay === 'afternoon') {
		greeting.textContent = 'Доброе утро, ';
	} else if (timeOfDay === 'evening') {
		greeting.textContent = 'Добрый вечер, ';
	} else if (timeOfDay === 'night') {
		greeting.textContent = 'Доброй ночи, ';
	}

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
	let result = Math.floor(Math.random() * (20 - 1 + 1) + 1);
	return result;
}
let randomNum = getRandomNum();


function setBg() {
	let bgNum = String(randomNum).padStart(2, '0');
	const img = new Image();
	img.src = `https://raw.githubusercontent.com/efremandre/stage-0/assets/images/${timeOfDay}/${bgNum}.jpg`;

	img.onload = () => {
		body.style.backgroundImage = `url('https://raw.githubusercontent.com/efremandre/stage-0/assets/images/${timeOfDay}/${bgNum}.jpg')`;
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
const description = document.querySelector('.description');
const weatherDescript = document.querySelector('.weather-description');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const errorWeather = document.querySelector('.weather-error');
const errorText = document.querySelector('.error-text');
const cityInput = document.querySelector('.city');


function errorMessageVisible() {
	errorWeather.classList.add('active');
	cityInput.classList.add('active');
	description.classList.add('hidden');
}

function errorMessageHidden() {
	errorWeather.classList.remove('active');
	cityInput.classList.remove('active');
	errorText.textContent = '';
	description.classList.remove('hidden');
}

async function getWeather() {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&lang=ru&appid=e43b03b7f9011cbeaef0160a9bff32af&units=metric`;
	const res = await fetch(url);
	const data = await res.json();

	if (cityInput.value === '' || cityInput.value === ' ') {
		errorText.textContent = 'Чтобы что-то найти, надо что-то ввести. Попробуй 🙃';
		errorMessageVisible();
	} else if (cityInput.value !== data.name) {
		errorText.textContent = `Точно ввел без ошибок? 🤔 Попробуй ещё раз.`;
		errorMessageVisible();
	} else {
		weatherIcon.className = 'weather-icon owf';

		weatherIcon.classList.add(`owf-${data.weather[0].id}`);
		temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
		weatherDescript.textContent = data.weather[0].description;
		windSpeed.textContent = `Ветер: ${data.wind.speed.toFixed(0)} м/с`;
		humidity.textContent = `Влажность: ${data.main.humidity.toFixed(0)}%`;

		errorMessageHidden();
	}
}

document.addEventListener('DOMContentLoaded', getWeather);

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
	let result = Math.floor(Math.random() * (19 - 1 + 1) + 1);
	return result;
}

let randomNumQuot = randomNumQuote();

quoteBtn.addEventListener('click', getChangeQuote);
function getChangeQuote() {
	console.log('tap')
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

// PLAYER
const audio = document.querySelector('audio');
const btnPlay = document.querySelector('.play');
const btnPrev = document.querySelector('.play-prev');
const btnNext = document.querySelector('.play-next');
const list = document.querySelector('.play-list');

const playListLength = playList.length;

let isPlay = false;
let playNum = 0;

function creatPlaylist() {
	playList.forEach((elem) => {
		const li = document.createElement('li');
		list.append(li);
		li.classList.add('play-item');
		li.textContent = `${elem.title}`;
	})
}
creatPlaylist();

function checkTrack() {
	const item = document.querySelectorAll('.play-item');
	item.forEach((el, index) => {
		if (el.textContent === playList[playNum].title) {
			el.classList.add('item-active');
		} else {
			el.classList.remove('item-active');
		}
	})
}

function toggleClassPlay() {
	isPlay ? btnPlay.classList.add('pause') : btnPlay.classList.remove('pause');
}

function scipTrack() {
	audio.src = playList[playNum].src;
	btnPlay.classList.add('pause');
	audio.play();
	isPlay = true;
}

function autoScipTrack() {
	audio.onended = function () {
		playNum += 1;
		if (playNum === playListLength) playNum = 0;
		this.src = playList[playNum].src;
		this.play();
	}
}
autoScipTrack();

function playAudio() {
	if (!isPlay) {
		audio.src = playList[playNum].src;
		audio.play();
		isPlay = true;
	} else if (isPlay) {
		audio.pause();
		isPlay = false;
	}
	checkTrack();
}

function prevAudio() {
	playNum -= 1;
	if (playNum < 0) playNum = playListLength - 1;
	checkTrack();
	scipTrack();
}

function nextAudio() {
	playNum += 1;
	if (playNum === playListLength) playNum = 0;
	checkTrack();
	scipTrack();
}

btnPlay.addEventListener('click', playAudio);
btnPlay.addEventListener('click', toggleClassPlay);

btnPrev.addEventListener('click', prevAudio);
btnNext.addEventListener('click', nextAudio);

////////////////////////////