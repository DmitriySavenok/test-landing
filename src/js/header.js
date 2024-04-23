function headerToggleMenu() {
	const header = document.querySelector('.header');
	const menuBtn = document.querySelector('#header__menu-btn')
  const body = document.querySelector('body')
	menuBtn.addEventListener('click', function() {
		header.classList.toggle('header--menu-opened')
		menuBtn.classList.toggle('header__menu-btn--close')
    body.classList.toggle('scroll-fixed')
	})
}

headerToggleMenu();