import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
	
	render() {
		var { isLoaded, items } = this.state;
		//check if data can be loaded
		if (!isLoaded) {
			return <div>Data is loading...</div>;
		} else {
			console.log(items);
			return <div>Data is loaded</div>;
		}
	}
}

export default Cart;