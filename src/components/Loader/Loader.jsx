import React from 'react';
import './Loader.css';

export class Loader extends React.Component {
	render() {

		return (
			<div class="preloader-wrapper" id="preloader">
				<div class="wrapper">
					<div class="loader-circle"></div>
					<div class="loader-bottom">LOADING</div>
				</div>
			</div>
		)
	}

}