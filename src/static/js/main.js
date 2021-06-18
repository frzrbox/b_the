const accordionDrawers = document.querySelectorAll('.accordion__drawers__item');

function toggleDrawers(button, content, arrow) {
	const visibleContentClass = 'accordion__drawers__item__body--visible';
	const visibleArrowClass = 'accordian__drawers__item__top__arrow--open';

	button.toggleAttribute('aria-pressed');
	button.toggleAttribute('aria-expanded');
	content.classList.toggle(visibleContentClass);
	arrow.classList.toggle(visibleArrowClass);
}

accordionDrawers.forEach((drawer) => {
	const drawerToggle = drawer.querySelector('.accordion__drawers__item__top');
	const drawerBody = drawer.querySelector('.accordion__drawers__item__body');
	const arrowIcon = drawer.querySelector(
		'.accordian__drawers__item__top__arrow'
	);

	drawerToggle.addEventListener('click', () => {
		toggleDrawers(drawerToggle, drawerBody, arrowIcon);
	});

	drawerToggle.addEventListener('keydown', (event) => {
		if (
			event.key === ' ' ||
			event.key === 'Enter' ||
			event.key === 'Spacebar'
		) {
			toggleDrawers(drawerToggle, drawerBody, arrowIcon);
		}
	});
});
