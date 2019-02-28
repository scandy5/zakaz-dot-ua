import React, { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Products } from './components/Products';
import { AppBackend } from './AppBackend';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			categories: [],
			products: [],
			selectedCategory: '',
			// cart: {}
		};

		this.backend = new AppBackend();
	}

	async componentDidMount() {
		const categories = await this.backend.getCategory()

		this.setState({
			selectedCategory: categories[0],
			categories
		});

		this.getProducts(categories[0]);
	}

	getCategories = async () => {
		const categories = await this.backend.getCategory();

		this.setState({ categories });
	}

	getProducts = async () => {
		const products = await this.backend.getProducts();

		this.setState({
			products: products.results
		});
	}

	onCategoryChange(selectedCategory) {
		this.setState({ selectedCategory }, () => {
			this.getProducts(selectedCategory);
		});
	}

	render() {
		// const {}
		const categoryTitle = this.state.categories.filter(category => category.title === "Пекарня").map(category => category.title)

		return (
			<div className="container">
				<Header />
				<main className="main">
					<Sidebar categories={this.state.categories}
						selected={this.state.selectedCategory}
						onChange={this.onCategoryChange} />
					<Products products={this.state.products} title={categoryTitle} />
				</main>
			</div>

		);
	}
}

export default App;
