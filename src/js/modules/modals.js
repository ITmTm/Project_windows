const modals = (state) => {
	function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
		const trigger = document.querySelectorAll(triggerSelector),
			  modal = document.querySelector(modalSelector),
			  close = document.querySelector(closeSelector),
			  windows = document.querySelectorAll('[data-modal]'),
			  scroll = calcScroll();

		trigger.forEach(item => {
			let event = item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}

				if (modal.classList.contains('popup_calc_profile')) {
					if (!state.form || !state.width || !state.height) {
						alert('Выберите форму и укажите размер');

						event.removeEventListener();
					}
				}

				if (modal.classList.contains('popup_calc_end')) {
					if (!state.type || !state.profile) {
						alert('Выберите тип остекления и его профиль');
						event.removeEventListener();
					}
				}

				hideWindowsDisplay();

				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;
				// document.body.classList.add('modal-open');  //bootstrap
			});
		});


		close.addEventListener('click', () => {
			hideWindowsDisplay();
			closeModal();
			document.body.style.marginRight = `0px`;
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal && closeClickOverlay) {
				hideWindowsDisplay();
				closeModal();
				document.body.style.marginRight = `0px`;
			}
		});

		function closeModal() {
			modal.style.display = 'none';
			// document.body.classList.remove('modal-open')
			document.body.style.overflow = '';
		}

		function hideWindowsDisplay() {
			windows.forEach(item => {
				item.style.display = 'none';
			})
		}
	}

	function showModalByTime(selector, time) {
		setTimeout(function() {
			document.querySelector(selector).style.display = 'block';
			document.body.style.overflow = 'hidden';
			document.body.style.marginRight = `${calcScroll()}px`;
		}, time);
	}

	function calcScroll() {
		let div = document.createElement('div');

		div.style.width = '50px';
		div.style.height = '50px';
		div.style.overflowY = 'scroll';
		div.style.visibility = 'hidden';

		document.body.appendChild(div);
		let scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();

		return scrollWidth;
	}

	bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindModal('.phone_link', '.popup', '.popup .popup_close');
	bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
	bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
	bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
	showModalByTime('.popup', 600);
};

export default modals;
