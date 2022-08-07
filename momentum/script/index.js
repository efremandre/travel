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

