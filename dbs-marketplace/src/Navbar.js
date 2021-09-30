import { useState } from "react";


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>DBS Marketplace </h1>
            <div className="links">
                <a href="/">LoginPage</a>
                <a href="/">Product</a>
                <a href="/Cart">Cart Page</a>
            </div>
        </nav>
    );
}

export default Navbar;