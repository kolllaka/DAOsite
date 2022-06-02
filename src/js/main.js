// Custom Scripts
// Burger menu
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		if (!menu.classList.contains('active')) {
			menu.classList.add('active')
			burger.classList.add('active-burger')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})

	// navbar breakpoints
	window.addEventListener('resize', () => {
		if (window.innerWidth > 767.98) {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
}
burgerMenu()

// Fixed menu when scroll
function fixedNav() {
	const nav = document.querySelector('nav')

	// 
	const breakpoints = 1
	if (window.scrollY >= breakpoints) {
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav)


// Select
const selectes = document.querySelectorAll('select');
function create(select) {
	var options = select.querySelectorAll('option');

	mySelect = document.createElement("div");
	mySelect.setAttribute("class", "select__choose");
	select.parentElement.appendChild(mySelect);

	mySelect.insertAdjacentHTML('beforeEnd',
		'<div class="select__selected"></div>' +
		'<div class="select__icon"><span></span></div>');

	myUl = document.createElement("ul");
	myUl.setAttribute("class", "select__options");
	select.parentElement.appendChild(myUl);

	options.forEach((option, index) => {
		myLi = document.createElement('li');
		myLi.setAttribute('class', 'select__option');
		myLi.innerHTML = option.innerHTML;
		if (option.selected) {
			console.log(option.selected);
			myLi.classList.toggle('selected');
		}
		myUl.appendChild(myLi);

	});
};

selectes.forEach(select => {
	create(select);
});

const customSelectes = document.querySelectorAll('.select');
customSelectes.forEach(select => {
	let selectBtn = select.querySelector('.select__choose');
	let selectOpts = select.querySelector('.select__options');
	const selectOptions = select.querySelectorAll('.select__option');

	var value = select.querySelector('select').value;
	update(select, value);

	selectBtn.addEventListener('click', e => {

		selectBtn.classList.toggle('active');
		selectOpts.classList.toggle('active');
	});

	selectOptions.forEach((selectOption, index) => {

		selectOption.addEventListener('click', e => {
			selectOptions.forEach(selectOption => {

				selectOption.classList.remove('selected')
			});

			e.target.classList.toggle('selected')
			update(select, index);
		});
	});
});

function update(select, index) {
	let selectTitle = select.querySelector('.select__selected');
	let selectSelected = select.querySelector('.selected');

	select.querySelectorAll('option').forEach((option, i) => {
		option.selected = false;
		if (i == index) {
			option.selected = true;
		};
	});

	selectTitle.innerHTML = selectSelected.innerHTML;
};

// Swiper
// BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
	}
}

if (document.querySelector('.slider-top')) {
	let sliderBodyTop = document.querySelector('.slider-top').querySelector('.slider__body');
	let itemSlider = new Swiper(sliderBodyTop, {
		autoplay: {
			delay: 2000,
		},
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 69,
		speed: 1000,
		loop: true,
		// Dotts
		pagination: {
		},
		// Arrows
		navigation: {
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			970: {
				slidesPerView: 4,
				spaceBetween: 40
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 69
			}
		}
	});
}

if (document.querySelector('.slider-bottom')) {
	let sliderBodyBottom = document.querySelector('.slider-bottom').querySelector('.slider__body');
	let itemSlider = new Swiper(sliderBodyBottom, {
		autoplay: {
			delay: 1500,
		},
		observer: true,
		observeParents: true,
		slidesPerView: 5,
		spaceBetween: 65,
		speed: 1500,
		loop: true,
		// Dotts
		pagination: {
		},
		// Arrows
		navigation: {
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 170
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			970: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 40
			},
			1440: {
				slidesPerView: 5,
				spaceBetween: 65
			}
		}
	});
}