'use strict';

const BTN_LOGIN = document.querySelector('.button-login__link');
const POPUP = document.querySelector('.popup-background');

BTN_LOGIN.addEventListener('click', function () {
	POPUP.classList.toggle('active');
	console.log('Бац по кнопке логин!');
})

POPUP.addEventListener('click', function () {
	POPUP.classList.toggle('active');
	console.log('Бац по серому полю');
})