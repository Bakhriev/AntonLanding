const burgerMenu = () => {
	const burger = document.querySelector('.burger')
	const navigation = document.querySelector('.header__navigation')
	const overlay = document.querySelector('.overlay')
	const elements = [burger, navigation, overlay]
	const body = document.querySelector('body')

	const toggleActiveClass = () => {
		elements.forEach(element => element.classList.toggle('active'))
		body.classList.toggle('disable-vertical-scroll')
	}

	burger.addEventListener('click', toggleActiveClass)

	overlay.addEventListener('click', toggleActiveClass)

	window.addEventListener('resize', () => {
		const {innerWidth} = window
		if (innerWidth > 991.98) {
			elements.forEach(element => element.classList.remove('active'))
			body.classList.remove('disable-vertical-scroll')
		}
	})
}
burgerMenu()

const dropdownInit = () => {
	const allDropdowns = document.querySelectorAll('[data-dropdown]')

	if (window.innerWidth > 992.98) {
		document.addEventListener('click', e => {
			let currentDropdown
			if (e.target.closest('[data-dropdown]')) {
				currentDropdown = e.target.closest('[data-dropdown]')
				currentDropdown.classList.toggle('active')
			}

			document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
				if (dropdown === currentDropdown) return
				dropdown.classList.remove('active')
			})
		})
	} else {
		allDropdowns.forEach(drp => {
			drp.addEventListener('click', () => {
				const subMenu = drp.querySelector('.dropdown__menu')
				if (!subMenu.style.maxHeight) {
					const allSubMenus = document.querySelectorAll('.dropdown__menu')
					allSubMenus.forEach(sub => {
						sub.style.maxHeight = ''
					})
					subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
				} else {
					subMenu.style.maxHeight = ''
				}
			})
		})
	}
}

dropdownInit()

const select = document.querySelector('.select')
const selectItems = document.querySelectorAll('.select-item')
const selected = document.querySelector('.select-text')

select.addEventListener('click', () => {
	select.classList.toggle('active')
})
selectItems.forEach(item => {
	item.addEventListener('click', () => {
		selected.textContent = item.textContent
	})
})

const wheels = document
	.querySelector('[data-wheel]')
	.querySelectorAll('.form__field')

const resetWheels = () => {
	wheels.forEach(checkbox => {
		checkbox.checked = false
	})
}

const wheelSelects = document.querySelectorAll('.form__select-secondary')

wheelSelects.forEach(sel => {
	sel.addEventListener('click', () => {
		resetWheels()
		sel.previousElementSibling.checked = true
	})
})

// Handle

const handleBars = document
	.querySelector('[data-handlebar]')
	.querySelectorAll('.form__field')

const handleBarsSelect = document.querySelectorAll('.form__select-primary')

handleBarsSelect.forEach(sel => {
	sel.addEventListener('click', () => {
		resetHandleBars()
		sel.previousElementSibling.checked = true
	})
})

const resetHandleBars = () => {
	handleBars.forEach(checkbox => {
		checkbox.checked = false
	})
}
