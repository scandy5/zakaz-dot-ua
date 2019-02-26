import React from 'react';
import './Header.css';

export const Header = () => {

	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo"> </div>
				<div className="header__cart">
					<div className="header__cart-img" />
					<div className="header__counter">
						<span className="header__quantity">123</span>
					</div>
					<span className="header__price">1200.00</span>
				</div>
			</div>

		</header>
	)
}