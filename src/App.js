import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import useToken from './useToken';


function App() {
	const {token, setToken} = useToken();

	if(!token){
		return <Login setToken={setToken}/>
	}

	return (
		<div className="wrapper">
			<h1>Application</h1>
			
			<BrowserRouter>
				<Switch>
					<Route path="/Login">
						<Login/>
					</Route>

					<Route path="/Dashboard">
						<Dashboard/>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
