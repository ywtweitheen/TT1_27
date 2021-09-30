import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
	constructor(props) {
        super(props);
        this.listRef = React.createRef();
	const { cart, addItem, removeItem } = props;
        //const totalPrice = cart.reduce((a, b) => a + b.qty * b.price, 0);
    }
    componentDidMount() {

    }
    render(){
        return(<div>
            <h2>Your Cart</h2>
	     //<div> Your Total Price is: {totalPrice}</div>
            <br></br>
            <button>Checkout</button>
            
        </div>)
    }

}

export default Cart;
