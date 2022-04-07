const nav = document.querySelector('.site-navigat');
const togg = document.querySelector('.site-navigat-button');

nav.classList.remove('site-navigat--notjs');
togg.addEventListener('click', function () {
	if (nav.classList.contains('site-navigat--closed')) {
		nav.classList.remove('site-navigat--closed');
		nav.classList.add('site-navigat--opened');
	} else {
		nav.classList.add('site-navigat--closed');
		nav.classList.remove('site-navigat--opened');
	}
});