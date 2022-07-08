'use strict';

//slider

// const btnNext = document.querySelector('.btn_next');
// const btnPrev = document.querySelector('.btn_prev');

// const slidesTrack = document.querySelector('.destinations__slides');
// const slide = document.querySelectorAll('.destinations__slide');
// const slider = [];

// for (let i = 0; i < slide.length; i++) {
// 	slider[i] = slide[i];
// 	slider[i].remove();
// }

// let step = 0;
// let offset = 0;

// function createSlides() {
// 	let block = document.createElement('div');

// 	for (let i = 0; i < slider.length; i++) {
// 		block = slider[step];
// 		block.classList.add('destinations__slide');
// 		block.style.transform = `translate(${offset * 860}px)`;
// 		document.querySelector('.destinations__slides').appendChild(block);
// 		step++;
// 		offset++;
// 	}

// }

// createSlides();

// btnNext.addEventListener('click', function () {
// 	offset -= 860;
// 	slidesTrack.style.transform = `translate(${offset}px)`;
// 	console.log('Next');

// 	if (offset <= -857) {
// 		btnNext.style.display = 'none'
// 	} else if (offset <= 860) {
// 		btnPrev.style.display = 'block';
// 	};
// })

// btnPrev.addEventListener('click', function () {
// 	offset += 860;
// 	slidesTrack.style.transform = `translate(${offset}px)`;
// 	console.log('Prev');

// 	if (offset >= 860) {
// 		btnPrev.style.display = 'none';
// 	} else if (offset >= -860) {
// 		btnNext.style.display = 'block';
// 	}
// })