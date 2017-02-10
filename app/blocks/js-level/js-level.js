window.onload = function () {
	const p = document.querySelector('.indicator__switch');

	p.addEventListener('change', () => {
		let status = p.dataset.status;
		if (p.value > 0 && p.value <= 2 && status !== 'junior') {
			p.value = 2;
			p.setAttribute('data-status', 'junior');
		}
		else if (p.value > 2 && p.value <= 5 && status !== 'middle') {
			p.value = 5;
			p.setAttribute('data-status', 'middle');
		}
		else if (p.value > 5 && p.value <= 10 && status !== 'master') {
			p.value = 10;
			p.setAttribute('data-status', 'master');
		}
		else if (status === 'junior') {
			p.value = 0;
			p.setAttribute('data-status', 'dummie');
		}
		else if (status === 'middle') {
			p.value = 2;
			p.setAttribute('data-status', 'junior');
		}
		else if (status === 'master') {
			p.value = 5;
			p.setAttribute('data-status', 'middle');
		}

	});
};

