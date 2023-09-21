const checkNumInputs = (selector) => {
	const numInputs = document.querySelectorAll(selector);

	numInputs.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '');

			if (item.value == !Number && item.value == '') {
				item.style.border = '1px solid red'
			} else {
				item.style.border = 'none'
			}
		});
	});
}

export default checkNumInputs;