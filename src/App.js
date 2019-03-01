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
			selectedCategory: ''
		};

		this.backend = new AppBackend();
	}

	async componentDidMount() {
		const categories = await this.backend.getCategory();

		this.setState({
			selectedCategory: categories[0],
			categories
		});

		console.log(this.state.selectedCategory.id);
		
		this.getProducts();
	}

	getCategories = async () => {
		const categories = await this.backend.getCategory();

		this.setState({ categories });
	}

	getProducts = async () => {
		const products = await this.backend.getProducts({ selectedCategory: this.state.selectedCategory.id });

		console.log(this.state.selectedCategory.id);
		
		this.setState({
			products: products.results
		});
	}

	onCategoryChange = (selectedCategory) => {
		selectedCategory = selectedCategory.target.dataset.id;

		console.log(selectedCategory);
		
		this.setState({ selectedCategory }, () => {
			this.getProducts();
		});
	}

	render() {
		const categoryTitle = this.state.categories.filter(category => category.title === 'Пекарня').map(category => category.title)

		return (
			<div className="container">
				<Header />
				<main className="main">
					<Sidebar categories={this.state.categories}
						selected={this.state.selectedCategory}
						onCategoryChange={this.onCategoryChange} />
					<Products products={this.state.products} title={categoryTitle} />
				</main>
			</div>

		);
	}
}

export default App;
