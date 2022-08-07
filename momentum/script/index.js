'use stript';


// TIME and DATE
function showTimeDate() {
	const time = document.querySelector('.time');
	const date = document.querySelector('.date');

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

function showGreeting() {
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