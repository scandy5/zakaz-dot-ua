import React from 'react';
import './Sidebar.css';

export class Sidebar extends React.Component {
	render() {
		return (
			<section className="sidebar">
				<h2 className="sidebar__title">Товари</h2>
				<div className="sidebar__category-container">
					{this.props.categories.map((category => {
						return <p className="sidebar__category">{category.title}</p>
					}))}
				</div>
			</section>
		)
	}

}
