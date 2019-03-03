import React from 'react';
import './Header.css';

export class Header extends React.Component {
	render() {
		const { cart } = this.props;

		return (
			<header className="header" >
				<div className="header__container">
					<div className="header__logo"> </div>
					<div className="header__cart">
						<div className="header__cart-img" />
						<div className="header__counter">
							<span className="header__quantity">{cart.length}</span>
						</div>
						<span className="header__price">{cart.reduce((a, b) => (a + (b.price * b.amount)), 0) / 100}</span>
					</div>
				</div>
			</header>
		)
	}


}