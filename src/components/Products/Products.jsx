import React from 'react';
import { ProductItem } from '../ProductItem';
import './Products.css';

export class Products extends React.Component {
	render() {
		const { title, onAdd, amount, cart, onDelete } = this.props;
		return (
			<section className="products">
				<div className="products__container">
					<h1 className="products__title">{title}</h1>
					<div className="products__items">
						{
							this.props.products.map((product) => {
								return <ProductItem
									name={product.title}
									price={product.price}
									weight={product.weight}
									imgUrl={product.gallery[0].s150x150}
									key={product.title} 
									onAdd={onAdd}
									onDelete={onDelete}
									amount={amount}
									cart={cart}/>
							})
						}
					</div>
				</div>
			</section>
		)
	}

}