const accordianDrawers = document.querySelectorAll('.accordian__drawers__item');

accordianDrawers.forEach((drawer) => {
	const drawerToggle = drawer.querySelector('.accordian__drawers__item__top');
	const drawerBody = drawer.querySelector('.accordian__drawers__item__body');
	const visibleClass = 'accordian__drawers__item__body--visible';
	let isExpanded = !!drawerToggle.getAttribute('aria-expanded');

	drawerToggle.addEventListener('click', () => {
		if (isExpanded) {
			isExpanded = false;
			drawerToggle.setAttribute('aria-pressed', false);
			drawerToggle.setAttribute('aria-expanded', false);
			drawerBody.classList.remove(visibleClass);
		} else {
			isExpanded = true;
			drawerToggle.setAttribute('aria-pressed', true);
			drawerToggle.setAttribute('aria-expanded', true);
			drawerBody.classList.add(visibleClass);
		}
	});
});
