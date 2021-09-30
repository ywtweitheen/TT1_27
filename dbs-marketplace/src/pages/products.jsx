// all products
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


// const [filter, setFilter] =  useState('All')
class Products extends Component {
	// step 1 : add constructor
	constructor(props) {
		super(props);
		this.state = {
			//data to be fetched from API
			items: [],
			isLoaded: false,
			cartItems: []
		};
	}

	componentDidMount() {
		// fetch('../products.json')
		fetch('http://localhost:8003/products')
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

	// addItem = (product) => {
	// 	const exist = cart.find((x) => x.id === product.id);
		// 	if (exist) {
		//   increment qty based on id 
		// 		)
		// 	);
		// 	} else {
		//     add to cart and qty: 1
		// 	}
	// };
	// remove Item= (product) => {
	// 	const exist = cart.find((x) => x.id === product.id);
		// 	if (exist.qty === 1) {
		//   remove id 
		// 	} else {
		// 	setCartItems(
		// 		decrement qty by -1 
	// 	);
	// 	}
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
