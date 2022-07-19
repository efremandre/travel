'use strict';

// slider
const btnNext = document.querySelector('.btn_next');
const btnPrev = document.querySelector('.btn_prev');

const btnPagination = document.querySelectorAll('.destinations__circle');

const slidesTrack = document.querySelector('.destinations__slides');
const slide = document.querySelectorAll('.destinations__slide');
const slideOffset = document.querySelector('.destinations__slide').offsetWidth;

const slider = [];
const pagination = [];

let step = 0;
let offset = 0;

let offsetVisible = 0

for (let i = 0; i < slide.length; i++) {
	slider[i] = slide[i];
	// slider[i].remove();
}

for (let i = 0; i < btnPagination.length; i++) {
	pagination[i] = btnPagination[i];
}

pagination[1].classList.add('active');

// function createSlides() {
// 	let block = document.createElement('div');

// 	for (let i = 0; i < slider.length; i++) {
// 		block = slider[step];
// 		block.classList.add('destinations__slide');
// 		document.querySelector('.destinations__slides').appendChild(block);

// 		if (step + 1 == slider.length) {
// 			step = 0;
// 			offset = 1;
// 		} else {
// 			step++;
// 			offset++;
// 		}
// 	}
// }
// createSlides();

function getLeft() {
	offsetVisible -= slideOffset;
	slidesTrack.style.transform = `translateX(${offsetVisible}px)`;

	if (offsetVisible === -slideOffset) {
		pagination[0].classList.remove('active');
		pagination[1].classList.remove('active');
		pagination[2].classList.add('active');
	} else if (offsetVisible === 0) {
		pagination[0].classList.remove('active');
		pagination[1].classList.add('active');
		pagination[2].classList.remove('active');
	}
	console.log(offsetVisible);
	console.log('Право');
}

function getRight() {
	offsetVisible += slideOffset;
	slidesTrack.style.transform = `translateX(${offsetVisible}px)`;

	if (offsetVisible === slideOffset) {
		pagination[0].classList.add('active');
		pagination[1].classList.remove('active');
		pagination[2].classList.remove('active');
	} else if (offsetVisible === 0) {
		pagination[0].classList.remove('active');
		pagination[1].classList.add('active');
		pagination[2].classList.remove('active');
	}
	console.log(offsetVisible);
	console.log('Лево');
}

btnNext.addEventListener('click', function () {
	getLeft();
})

btnPrev.addEventListener('click', function () {
	getRight();
})