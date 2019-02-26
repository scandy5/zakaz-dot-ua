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
		}

		this.backend = new AppBackend();
	}

	async componentDidMount() {
		this.getCategories();
		this.getProducts();
	}

	getCategories = async () => {
		const categories = await this.backend.getCategory({})

		this.setState({ categories });
	}

	getProducts = async () => {
		const products = await this.backend.getProducts({})

		this.setState({ products })
	}

	// onCategoryChange(selectedCategory) {
	// 	this.setState({
	// 		selectedCategory
	// 	}) //() => {
	// 	// 	// TODO load new products
	// 	// });
	// }

	render() {
		// const {}

		return (
			<div className="container">
				<Header />
				<main className="main">
					<Sidebar categories={this.state.categories} /*
						selected={this.state.selectedCategory}
						onChange={this.onCategoryChange} *//>
					<Products products={this.state.products} />
				</main>
			</div>

		);
	}
}

export default App;
