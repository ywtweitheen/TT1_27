// all products
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const [filter, setFilter] =  useState('All')
class Products extends Component {
	// step 1 : add constructor
	constructor(props) {
		super(props);
		this.state = {
			//data to be fetched from API
			items: [],
			isLoaded: true,
			cartItems: []
		};
	}

	componentDidMount() {
		// fetch('../products.json')
		fetch('http://localhost:8000/products')
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

	// addItem = (item) => {

	// };

	render() {
		var { isLoaded, items } = this.state;
		//check if data can be loaded
		if (!isLoaded) {
			return <div>Data is loading...</div>;
		} else {
			return (
				<div class="eachItem">
					{items.map((item) => (
						<li key={item.id}>
							<img className="small" src={item.image} />
							Item: {item.title} | Price: {item.price}
							<button onClick={() => this.addItem(item)}>Add to Cart</button>
						</li>
					))}
				</div>
			);
		}
	}
}

export default Products;
