export class AppBackend {
	constructor() {
		this.baseUrl = 'https://staging-stores-api.zakaz.ua/stores/default/categories/';
	}

	getCategories() {
		return fetch(`${this.baseUrl}`)
			.then((response) => response.json());
	}

	getProducts({selectedCategory}) {
		return fetch(`${this.baseUrl}${selectedCategory}/products/`)
			.then((response) => response.json());
	}
}

