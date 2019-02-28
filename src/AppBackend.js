export class AppBackend {
	constructor() {
		this.baseUrl = 'https://staging-stores-api.zakaz.ua/stores/default/categories/';
	}

	getCategory() {
		return fetch(`${this.baseUrl}`)
			.then((response) => response.json());
	}

	getProducts({category}) {
		return fetch(`${this.baseUrl}${category}/products/`)
			.then((response) => response.json());
	}
}

