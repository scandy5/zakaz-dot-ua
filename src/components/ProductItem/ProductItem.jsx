import React from 'react';
import './ProductItem.css';

export class ProductItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, price, weight } = this.props;

		return (
			<div className="products__item">
				<div className="products__picture" />
				<span className="products__price">39.40 <span>грн</span></span>
				<p className="products__name">
					some title some title some title {name}
				</p>
				<div className="products__weight">400г</div>
			</div>
		)
	}
}