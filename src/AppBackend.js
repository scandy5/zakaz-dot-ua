export class AppBackend {
	constructor() {
		this.baseUrl = 'https://staging-stores-api.zakaz.ua/stores/default/categories/';
	}

	getCategory({}) {
		return fetch(`${this.baseUrl}`)
			.then((response) => response.json());
	}

	getProducts({}) {
		return fetch(`${this.baseUrl}bakery/products/`)
			.then((response) => response.json());
	}
}

