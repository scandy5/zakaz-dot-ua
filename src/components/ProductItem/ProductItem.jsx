import React from 'react';
import './ProductItem.css';

export class ProductItem extends React.Component {
	render() {
		const { name, price, weight, imgUrl, onAdd, onDelete, cart } = this.props;

		const productsInCart = cart.find(element => element.title === name) === undefined;
	
		return (
			<div className="productItem">
				{
					productsInCart ?
						<button className="productItem__button" onClick={() => onAdd(name)}>
							Додати
							<div className="productItem__cart-img" />
						</button>
						:
						<div className="productItem__amount-counter">
							<button className="productItem__button_minus productItem__button_counter" onClick={() => onDelete(name)}>-</button>
							<div className="productItem__amount">{cart
								.filter(element => element.title === name)
								.map(element => {
									return element.amount
								})}</div>
							<button className="productItem__button_plus productItem__button_counter" onClick={() => onAdd(name)}>+</button>
						</div>
				}
				<div className="productItem__picture">
					<img src={imgUrl} alt={name} className="productItem__img" />
				</div>
				<span className="productItem__price">{(price / 100).toFixed(2)}<span> грн</span></span>
				<p className="productItem__name">
					{name}
				</p>
				<div className="productItem__weight">{weight} г</div>
			</div>
		)
	}
}