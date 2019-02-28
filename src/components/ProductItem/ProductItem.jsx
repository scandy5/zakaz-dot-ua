import React from 'react';
import './ProductItem.css';

export class ProductItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { name, price, weight, imgUrl } = this.props;

		return (
			<div className="products__item">
				<div className="products__picture">
					<img src={imgUrl} alt={name} className="product__img"/>
				</div>
				<span className="products__price">{price}<span> грн</span></span>
				<p className="products__name">
					{name}
				</p>
				<div className="products__weight">{weight} г</div>
			</div>
		)
	}
}