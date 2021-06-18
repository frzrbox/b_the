const accordionDrawers = document.querySelectorAll('.accordion__drawers__item');

function toggleDrawers(button, content) {
	const visibleClass = 'accordion__drawers__item__body--visible';

	button.toggleAttribute('aria-pressed');
	button.toggleAttribute('aria-expanded');
	content.classList.toggle(visibleClass);
}

accordionDrawers.forEach((drawer) => {
	const drawerToggle = drawer.querySelector('.accordion__drawers__item__top');
	const drawerBody = drawer.querySelector('.accordion__drawers__item__body');

	drawerToggle.addEventListener('click', () => {
		toggleDrawers(drawerToggle, drawerBody);
	});

	drawerToggle.addEventListener('keydown', (event) => {
		if (
			event.key === ' ' ||
			event.key === 'Enter' ||
			event.key === 'Spacebar'
		) {
			toggleDrawers(drawerToggle, drawerBody);
		}
	});
});
