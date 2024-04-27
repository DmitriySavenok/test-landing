const menuBtn = document.querySelector('#header__menu-btn')
const header = document.querySelector('.header');
const body = document.querySelector('body')

menuBtn.addEventListener('click', function() {
	headerToggleMenu();
})

function headerToggleMenu() {
	header.classList.toggle('header--menu-opened')
	menuBtn.classList.toggle('header__menu-btn--close')
	body.classList.toggle('scroll-fixed')
}

function headerCloseMenu() {
	header.classList.remove('header--menu-opened')
	menuBtn.classList.remove('header__menu-btn--close')
	body.classList.remove('scroll-fixed')
}

function headerLinkClick() {
	document.querySelectorAll('.header__nav-link').forEach(el => {
		el.addEventListener('click', (e) => {
			headerCloseMenu();
		})
	})
}

headerLinkClick();