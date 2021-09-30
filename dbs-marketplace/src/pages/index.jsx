import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
	return (
		<div>
			<h2>Welcome to marketplace</h2>
			<container>
				<form>
					<div className="form-inner">
						<h2> Login Page</h2>
						<div className="form-group" />
						<label> Enter Username </label>
						<input type="text" placeholder="Username" name="username" />
						<label> Enter Password </label>
						<input type="password" placeholder="Password" password="password" />
						<br></br>
						<button onClick={logIn}>Log In</button>
						<br></br>
						<button onClick={reseT}>Reset</button>
					</div>
				</form>
			</container>
		</div>
	);
	function logIn(){
		alert("Log in Success")
	}
};

export default MainPage;
