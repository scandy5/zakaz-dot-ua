import React from 'react';
import { ProductItem } from '../ProductItem';
import './Products.css';

export class Products extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { title } = this.props;

		return (
			<section className="products">
				<div className="products__container">
					<h1 className="products__title">{title}</h1>
					<div className="products__items">
					{/* {this.props.products.map((product) => {
							return <ProductItem title={product.name} key={product.name} />
						})} */}
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
						<ProductItem />
					</div>
				</div>
			</section>
		)
	}

}