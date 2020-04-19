document.addEventListener('DOMContentLoaded', function () {
	// Custom JS
	const gifs = document.querySelectorAll('.parimatch__main-info_gif');
	const lists = document.querySelectorAll('.step-list');
	const appleDevice = document.querySelectorAll('.apple-device');
	const androindDevice = document.querySelectorAll('.android-device');
	const listsParent = document.querySelector('.parimatch__main-info_steps');

	listsParent.addEventListener('click', function ({ target }) {
		let currentElementIndex = [...lists].indexOf(target);
		if (!target.matches('.step-list')) {
			return;
		}
		lists.forEach((list) => {
			list.classList.remove('list-active');
		});
		gifs.forEach((gif) => {
			gif.classList.remove('active-gif');
		});
		target.classList.add('list-active');
		gifs[currentElementIndex].classList.add('active-gif');
	});

	//user browser detection
	if (/webOS|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
		androindDevice.forEach((android) => {
			android.style.display = none;
		});
		appleDevice.forEach((apple) => {
			apple.style.display = block;
		});
	}
});
