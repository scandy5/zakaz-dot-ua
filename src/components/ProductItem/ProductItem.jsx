import React from 'react';
import './ProductItem.css';
import * as classNames from 'classnames';

export class ProductItem extends React.Component {
	render() {
		const { name, price, weight, imgUrl } = this.props;

		return (
			<div className="products__item" onMouseOver={this.onHoverItem}>
				<button className="products__button">
					Додати
					<div className="products__cart-img" />
				</button>
				<div className="products__picture">
					<img src={imgUrl} alt={name} className="product__img" />
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