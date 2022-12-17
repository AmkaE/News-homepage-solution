// dom elements
const menuIcon = document.querySelector('.menu-icon');
const menuCloseIcon = document.querySelector('.menu-close-icon');
const navLinks = document.querySelector('.nav--links');
const main = document.querySelector('main');
const body = document.querySelector('body');

menuIcon.addEventListener('click', showNavlinks);
menuCloseIcon.addEventListener('click', hideNavLinks);
main.addEventListener('click', hideNavLinks);

function showNavlinks() {
	// show nav links and remove hide class,
	navLinks.classList.add('show');
	navLinks.classList.remove('hide');

	// show menu close icon and remove hide class,
	menuCloseIcon.classList.add('show');
	menuCloseIcon.classList.remove('hide');

	// hide menu icon and remove show class,
	menuIcon.classList.add('hide');
	menuIcon.classList.remove('show');

	// darken background
	body.classList.add('darken');

	// disable scrolling
	disableScroll();
}

function hideNavLinks() {
	// hide nav links and remove show class,
	navLinks.classList.add('hide');
	navLinks.classList.remove('show');

	// hide menu close icon and remove show class,
	menuCloseIcon.classList.add('hide');
	menuCloseIcon.classList.remove('show');

	// show menu icon and remove hide class,
	menuIcon.classList.add('show');
	menuIcon.classList.remove('hide');

	// remove darken background
	body.classList.remove('darken');

	// enable scrolling
	enableScroll();
}

function disableScroll() {
	// Get the current page scroll position
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	(scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
		// if any scroll is attempted, set this to the previous value
		(window.onscroll = function () {
			window.scrollTo(scrollLeft, scrollTop);
		});
}

function enableScroll() {
	window.onscroll = null;
}
