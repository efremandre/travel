'use strict';

//burger
const menuBtn = document.querySelector('.header__burger');

const mobileNavigation = document.querySelector('.header__navigation');
const linkMenu = document.querySelectorAll('.navigation__item');
const closeBurger = document.querySelector('.navigation__close');

const blackoutBg = document.querySelector('.blackout-bg');
const body = document.body;

function toggleClass() {
	mobileNavigation.classList.toggle('active');
	closeBurger.classList.toggle('active');
	blackoutBg.classList.toggle('active');
	body.classList.toggle('scroll-non');
}

function clickEvent(tap) {
	tap.addEventListener('click', function () {
		toggleClass();
		console.log('Tap' + tap);
	})
}

if (linkMenu.length > 0) {
	linkMenu.forEach(linkMenu => {
		linkMenu.addEventListener('click', function () {
			if (mobileNavigation.classList.contains('active')) {
				toggleClass();
			}
		})
	});
}

clickEvent(menuBtn);
clickEvent(closeBurger);
clickEvent(blackoutBg);