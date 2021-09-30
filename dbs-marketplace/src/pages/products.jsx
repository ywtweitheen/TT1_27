// all products
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
	// step 1 : add constructor
	constructor(props) {
		super(props);
		this.state = {
			//data to be fetched from API
			items: [
				{
					id: 1,
					title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
					price: 109.95,
					description:
						'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
					category_id: 3,
					image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
					qty: 50
				}
			],
			isLoaded: true
		};
	}

	componentDidMount() {
		// fetch('../products.json')
		fetch('http://localhost:5000/products')
			// convert res to json
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					//update state as data would have been retreived from API
					isLoaded: true,
					items: json
				});
			});
	}
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

export default Products;
