const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {

	const header = document.querySelector(headerSelector),
		tab = document.querySelectorAll(tabSelector),
		content = document.querySelector(contentSelector)



	function hideTabContent() {

		content.forEach(item => {      // здесь выдает ошибку!!!!

			item.style.display = 'none';

		});

	};

	tab.forEach(item => {

		item.classList.remove(activeClass);

	})

	function showTabContent(i = 0) {

		content[i].style.display = 'block';

		tab[i].classList.add(activeClass);

	};

	hideTabContent();

	showTabContent();



	header.addEventListener('click', (e) => {

		const target = e.target;

		if (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {

			tab.forEach((item, i) => {

				if (target == item || target.parentNode == item) {

					hideTabContent();

					showTabContent(i);

				}

			})

		}

	})

};

export default tabs;