import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';


import MainPage from "./pages";
import ProductsPage from "./pages/products";
import CartPage from "./pages/cart";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          //switch to multiple paths
          <Route exact path="/" component={MainPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </Router>);

  }
}

export default App;
