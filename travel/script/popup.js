'use strict';

const BTN_LOGIN = document.querySelector('.button-login__link');
const MOBILEBTN_LOGIN = document.querySelector('.login__link');
const BTN_LINK_REG = document.querySelector('.popup__footer-link');
const BTN_LINK_SIGIN = document.querySelector('.popupreg-link');
const BTN_SIGNIN = document.getElementById('sign-in');
const BTN_SIGNUP = document.getElementById('sign-up');

let INPUT_EMAIL = document.querySelector('.input-email');
let INPUT_PASS = document.querySelector('.input-password');

let INPUT_EMAIL2 = document.querySelector('.input-email2');
let INPUT_PASS2 = document.querySelector('.input-password2');

const POPUP_WRAP = document.querySelector('.popup-wrapper');
const POPUP = document.querySelector('.popup__content');
const POPUP_REG = document.querySelector('.popupreg__content');
const BODY = document.querySelector('body');

BTN_LOGIN.addEventListener('click', function () {
	POPUP_WRAP.classList.toggle('active');
	POPUP.classList.toggle('active');
	BODY.classList.toggle('scroll-non');
})

MOBILEBTN_LOGIN.addEventListener('click', function () {
	POPUP_WRAP.classList.toggle('active');
	POPUP.classList.toggle('active');
	BODY.classList.toggle('scroll-non');
})

POPUP_WRAP.addEventListener('click', function (e) {
	console.log('БАЦ по серому')
	if (!e.target.closest('.popup__content') && !e.target.closest('.popupreg__content')) {
		POPUP_WRAP.classList.toggle('active');
		POPUP.classList.toggle('active');
		BODY.classList.toggle('scroll-non');
	}
})

BTN_LINK_REG.addEventListener('click', function () {
	POPUP.classList.toggle('hidden');
	POPUP_REG.classList.toggle('active');
})


BTN_LINK_SIGIN.addEventListener('click', function () {
	POPUP.classList.toggle('hidden');
	POPUP_REG.classList.toggle('active');
})

BTN_SIGNIN.addEventListener('click', function () {
	alert(`E-mail:  ${INPUT_EMAIL.value}\nPassword: ${INPUT_PASS.value}`);
})

BTN_SIGNUP.addEventListener('click', function () {
	alert(`E-mail:  ${INPUT_EMAIL2.value}\nPassword: ${INPUT_PASS2.value}`);
})




