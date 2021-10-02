import './App.css';
//import { useState } from 'react';
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
			<Dashboard/>
		</div>
	);
}

export default App;
