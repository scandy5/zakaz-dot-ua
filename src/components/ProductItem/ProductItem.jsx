import React from 'react';
import './ProductItem.css';

export class ProductItem extends React.Component {
	render() {
		const { name, price, weight, imgUrl, onAdd, onDelete, cart } = this.props;
	
		return (
			<div className="products__item">
				{
					cart.find(element => element.title === name) === undefined ?
						<button className="products__button" onClick={() => onAdd(name)}>
							Додати
							<div className="products__cart-img" />
						</button>
						:
						<div className="products__amount-counter">
							<button className="products__button_minus products__button_counter" onClick={() => onDelete(name)}>-</button>
							<div className="products__amount">{cart
								.filter(element => element.title === name)
								.map(element => {
									return element.amount
								})}</div>
							<button className="products__button_plus products__button_counter" onClick={() => onAdd(name)}>+</button>
						</div>
				}
				<div className="products__picture">
					<img src={imgUrl} alt={name} className="product__img" />
				</div>
				<span className="products__price">{(price / 100).toFixed(2)}<span> грн</span></span>
				<p className="products__name">
					{name}
				</p>
				<div className="products__weight">{weight} г</div>
			</div>
		)
	}
}