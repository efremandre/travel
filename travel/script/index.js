'use strict';

console.log("score: 100/100 \n\n[+] 1. Вёрстка соответствует макету. Ширина экрана 390px +48 \n\n[+] 2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n\n[+] 3. На ширине экрана 390рх и меньше реализовано адаптивное меню +22");

//burger
const burger = document.querySelector('.burger__row')
const menuBtn = document.querySelector('.header__burger');

const menu = document.querySelector('.header__navigation');
const linkMenu = document.querySelectorAll('.navigation__item');
const closeBurger = document.querySelector('.navigation__close');

const allPageBg = document.querySelector('.blackout-bg');
const body = document.body;

if (linkMenu.length > 0) {
	linkMenu.forEach(linkMenu => {
		linkMenu.addEventListener('click', function () {
			if (menu.classList.contains('active-menu')) {
				menu.classList.remove('active-menu');
				closeBurger.classList.remove('active-close');
				closeBurger.classList.remove('hidden');
				allPageBg.classList.remove('blackout-bg-visible');
				body.classList.remove('scroll-non');
			}
		})
	});
}

menuBtn.addEventListener('click', function () {
	menu.classList.toggle('active-menu');
	closeBurger.classList.toggle('active-close');
	closeBurger.classList.toggle('hidden');
	allPageBg.classList.toggle('blackout-bg-visible');
	body.classList.toggle('scroll-non');
})

closeBurger.addEventListener('click', function () {
	menu.classList.toggle('active-menu');
	closeBurger.classList.toggle('hidden');
	closeBurger.classList.toggle('active-close');
	allPageBg.classList.toggle('blackout-bg-visible');
	body.classList.toggle('scroll-non');
})

allPageBg.addEventListener('click', function () {
	menu.classList.toggle('active-menu');
	closeBurger.classList.toggle('active-close');
	closeBurger.classList.toggle('hidden');
	allPageBg.classList.toggle('blackout-bg-visible');
	body.classList.toggle('scroll-non');
})

