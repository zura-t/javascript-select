const getTemplate = (data = [], placeholder, selectedId) => {
	let text = placeholder ?? 'placeholder по умолчанию'

	const items = data.map(item => {
		let cls = ''
		if (item.id === selectedId) {
			text = item.value
			cls = 'selected'
		}
		return `
		<li class="select__item ${cls}" data-type="item" data-n="${item.id}">${item.value}</li>
		`
	}).join('')

	return `
	<div class="select__backdrop" data-type="backdrop"></div>
	<div class="select__input" data-type="input">
	<span data-type="value">${text}</span>
	<i class="fa fa-chevron-down" data-type="arrow"></i>
</div>
<div class="select__dropdown">
	<ul class="select__list">
	${items}
	</ul>
</div>
	`
}

export class Select {
	constructor(selector, options) {
		this.$el = document.querySelector(selector)
		this.options = options
		this.selectedId = options.selectedId

		this.#render()
		this.#setup()
	}

	#render() {
		const { placeholder, data } = this.options
		this.$el.classList.add('select')
		this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId)
	}

	#setup() {
		this.clickHandler = this.clickHandler.bind(this)
		this.$el.addEventListener('click', this.clickHandler)
		this.$arrow = this.$el.querySelector('[data-type = "arrow"]')
		this.$value = this.$el.querySelector('[data-type = "value"]')
	}

	clickHandler(event) {
		const { type } = event.target.dataset

		if (type === 'input') {
			this.toggle()
		} else if (type === 'item') {
			const id = event.target.dataset.n
			this.select(id)
		} else if (type === 'backdrop') {
			this.close()
		}
	}

	get isOpen() {
		return this.$el.classList.contains('open')
	}

	get current() {
		return this.options.data.find(item => item.id === this.selectedId)
	}

	select(id) {
		this.selectedId = id
		this.$value.textContent = this.current.value

		if (this.$el.querySelector(`[data-n="${id}"]`).classList.contains('selected')) {
			this.$el.querySelector(`[data-n="${id}"]`).classList.remove('selected')
			this.$value.innerHTML = this.options.placeholder
		} else {
			this.$el.querySelectorAll('[data-type="item"]').forEach(el => {
				el.classList.remove('selected')
			})

			this.$el.querySelector(`[data-n="${id}"]`).classList.add('selected')

			this.options.onSelect ? this.options.onSelect(this.current) : null
		}



		this.close()
	}

	toggle() {
		this.isOpen ? this.close() : this.open()
	}

	open() {
		this.$el.classList.add('open')
		this.$arrow.setAttribute('class', 'fa fa-chevron-up')
	}

	close() {
		this.$el.classList.remove('open')
		this.$arrow.setAttribute('class', 'fa fa-chevron-down')
	}

	destroy() {
		this.$el.removeEventListener('click', this.clickHandler)
		this.$el.innerHTML = ''
	}
}