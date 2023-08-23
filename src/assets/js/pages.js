const accordionsParent = document.querySelectorAll('[data-accordions-parent]')
const accordions = document.querySelectorAll('[data-accordion]')

// keyboard arrows support
accordionsParent.forEach(par => {
	const accordionToggles = par.querySelectorAll('[data-accordion-toggle]')
	const accordionsLength = accordionToggles.length - 1

	accordionToggles.forEach((toggle, index) => {
		toggle.addEventListener('keydown', e => {
			const {key} = e
			if (key === 'ArrowDown' || key === 'ArrowRight') {
				index !== accordionsLength
					? accordionToggles[index + 1].focus()
					: accordionToggles[0].focus()
			}
			if (key === 'ArrowLeft' || key === 'ArrowUp') {
				index !== 0
					? accordionToggles[index - 1].focus()
					: accordionToggles[accordionsLength].focus()
			}
		})
	})
})

// Open Close Accordion
accordions.forEach(accordion => {
	const accordionToggle = accordion.querySelector('[data-accordion-toggle]')
	const accordionWrapper = accordion.querySelector('[data-accordion-wrapper]')

	const accordionsLength = accordions.length - 1

	accordionToggle.addEventListener('click', () => {
		if (!accordionWrapper.style.height) {
			accordionWrapper.style.height = `${accordionWrapper.scrollHeight}px`
			accordionToggle.classList.add('opened')
		} else {
			accordionWrapper.style.height = ''
			accordionToggle.classList.remove('opened')
		}
	})
})
