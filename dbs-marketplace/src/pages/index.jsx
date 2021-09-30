import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {

	const [name, setName] = useState("");
    const [password, setPassword] = useState("")
	const [customers, setCustomers] = useState(null)


	useEffect(() => {
		fetch('http://localhost:8005/customers')
		.then(res => { 
			return res.json();
		})
		.then(customers => {
			setCustomers(customers)
			console.log(customers)
			// console.log(customers)
		})
	}, [])


	// const submitHandler = e => {
	// 	e.preventDefault();
	// 	// Login(name,password)
	// }


	return (
		<div>
			<h2>Welcome to marketplace</h2>
			<div>
				<form>
					<div className="form-inner">
						<h2> Login Page</h2>

						<div className="form-group" />
						<label> Enter Username </label>
						<input id="user" type="text" placeholder="Username" name="username"/>
						<label> Enter Password </label>
						<input id="pwd" type="password" placeholder="Password" password="password"/>
						<br></br>
						<button type = "submit" onClick = {logIn}>Login</button>
					</div>
				</form>
			</div>
		</div>
	);


	function logIn(){
		var username = document.getElementById("user").value;
		var password = document.getElementById("password").value;
		console.log(customers)
		// for (var i = 0; i < customers.length; i++) {
		// 	var customer = customers[i];
		// 	if (customer.)
		// }

		
		alert("Log in Success")
	}
};

export default MainPage;
