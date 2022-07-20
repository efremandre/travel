'use strict';

const BTN_LOGIN = document.querySelector('.button-login__link');
const POPUP_WRAP = document.querySelector('.header__popup-wrapper');
const POPUP = document.querySelector('.popup__content');

BTN_LOGIN.addEventListener('click', function () {
	POPUP_WRAP.classList.toggle('active');
	POPUP_WRAP.classList.toggle('bg');
	console.log('Бац по кнопке логин!');
})

POPUP_WRAP.addEventListener('click', function () {
	POPUP_WRAP.classList.toggle('active');
	POPUP_WRAP.classList.toggle('bg');
	console.log('Бац по серому полю');
})