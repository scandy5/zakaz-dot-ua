import React from 'react';
import './Sidebar.css';
import * as classNames from 'classnames';

export class Sidebar extends React.Component {
	render() {
		const { onCategoryChange, categories, selectedCategory } = this.props;

		return (
			<section className="sidebar">
				<h2 className="sidebar__title">Товари</h2>
				<div className="sidebar__category-container">
					{
						categories.map(category => {
								const categoryClassname = classNames({
										'sidebar__category': true,
										'sidebar__category_active': category.id === selectedCategory
								});
								
								return (
									<p className={categoryClassname}
										data-id={category.id}
										onClick={() => onCategoryChange(category.id)}>
										{category.title}
									</p>
								)
							})
					}
				</div>
			</section>
		)
	}
}
