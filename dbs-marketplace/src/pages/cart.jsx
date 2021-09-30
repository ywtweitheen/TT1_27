import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
	constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }
    componentDidMount() {

    }
    render(){
        return(<div>
            <h2>Your Cart</h2>
        </div>)
    }

}

export default Cart;