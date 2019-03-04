import React from 'react';
import './Loader.css';

export class Loader extends React.Component {
	render() {

		return (
			<div className="preloader-wrapper" id="preloader">
				<div className="wrapper">
					<div className="loader-circle"></div>
					<div className="loader-bottom">LOADING</div>
				</div>
			</div>
		)
	}

}