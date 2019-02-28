import React from 'react';
import './Sidebar.css';

export class Sidebar extends React.Component {
	render() {
		return (
			<section className="sidebar">
				<h2 className="sidebar__title">Товари</h2>
				<div className="sidebar__category-container">
					{this.props.categories
						.filter(category => category.title === 'Пекарня')
						.map(category => <p className="sidebar__category sidebar__category_active">{category.title}</p>)}
					{this.props.categories
						.filter(category => category.title !== 'Пекарня')
						.map(category => <p className="sidebar__category">{category.title}</p>)}
				</div>
			</section>
		)
	}
}