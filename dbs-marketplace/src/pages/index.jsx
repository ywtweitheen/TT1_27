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
						<button onClick={logIn}>Log In</button>
					</div>
				</form>
			</container>
		</div>
	);
	function logIn(){
		
	}
};

export default MainPage;
