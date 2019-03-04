import React, { Component } from 'react';
import './App.css';
import { Loader } from './components/Loader';
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
			isLoading: false,
			cart: []
		};

		this.backend = new AppBackend();
	}

	async componentDidMount() {
		const categories = await this.backend.getCategories();

		this.setState({
			selectedCategory: categories[0].id,
			categories
		});

		this.getProducts();
	}

	getProducts = async () => {
		this.setState({
			isLoading: true
		})

		const products = await this.backend.getProducts({ selectedCategory: this.state.selectedCategory });

		this.setState({
			products: products.results,
			isLoading: false
		});
	}

	deleteFromCart = (name) => {
		const selectedProduct = this.state.products.find((product) => {
			return product.title === name;
		});

		const sameProduct = this.state.cart.find((product) => {
			return product.title === selectedProduct.title;
		});


		if (sameProduct.amount > 1) {
			sameProduct.amount--;
		} else {
			this.state.cart.pop({
				title: selectedProduct.title,
				price: selectedProduct.price,
				amount: 0
			});
		}
		
		this.setState({
			cart: this.state.cart
		});
	}

	addToCart = (name) => {
		const selectedProduct = this.state.products.find((product) => {
			return product.title === name;
		});

		const sameProduct = this.state.cart.find((product) => {
			return product.title === selectedProduct.title;
		});

		if (sameProduct) {
			sameProduct.amount++;
		} else {
			this.state.cart.push({
				title: selectedProduct.title,
				price: selectedProduct.price,
				amount: 1
			});
		}

		this.setState({
			cart: this.state.cart
		});
	}

	onCategoryChange = (selectedCategory) => {
		this.setState({ selectedCategory }, () => {
			this.getProducts();
		});
	}

	render() {
		const categoryTitle = this.state.categories.filter(category => category.id === this.state.selectedCategory).map(category => category.title)

		return (
			<div className="container">
				<Header cart={this.state.cart} />
				<main className="main">
					<Sidebar categories={this.state.categories}
						selected={this.state.selectedCategory}
						onCategoryChange={this.onCategoryChange}
						selectedCategory={this.state.selectedCategory}/>
					{this.state.isLoading ?
						<Loader />
						:
						<Products products={this.state.products}
							title={categoryTitle}
							onAdd={this.addToCart}
							onDelete={this.deleteFromCart}
							amount={this.getAmount}
							cart={this.state.cart} />}
				</main>
			</div>
		);
	}
}

export default App;
