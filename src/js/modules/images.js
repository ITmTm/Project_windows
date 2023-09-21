const images = () => {
	const imgPopup = document.createElement('div'),
		  workSection = document.querySelector('.works'),
		  bigImage = document.createElement('img');

	imgPopup.classList.add('popupimg');
	workSection.appendChild(imgPopup);

	imgPopup.style.justifyContent = 'center';
	imgPopup.style.alignItems = 'center';
	imgPopup.style.display = 'none';


	bigImage.style.cssText = `
		width: 550px;
		height: 550px;
	`;

	workSection.addEventListener('click', (e) => {
		e.preventDefault();

		let target = e.target;

		if (target && target.classList.contains('preview')) {
			imgPopup.style.display = 'flex';

			document.body.style.overflow = 'hidden';

			const path = target.parentNode.getAttribute('href');
			bigImage.setAttribute('src', path);
		}

		if (target && target.matches('div.popupimg')) {
			imgPopup.style.display = 'none';

			document.body.style.overflow = '';
		}

		document.addEventListener('keydown', (e) => {
			if (e.code === 'Escape') {
				document.body.style.overflow = '';
				imgPopup.style.display = 'none';
			}
		})
	})

	imgPopup.appendChild(bigImage);
};

export default images;