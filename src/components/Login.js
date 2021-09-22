import React, {useState} from "react";
import PropTypes from 'prop-types';

async function LoginUser(credentials) {
    console.log(credentials);
    return fetch('http://localhost:8080/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login( {setToken} ){
    const[username, setUserName] = useState();
    const[password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(username);
        console.log(password);
        const token = await LoginUser({
            username: username,
            password: password
        });
        setToken(token);
    }

    return(
        <div>
            <h1>Please log in</h1>
            
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>

                    <input type="text" onChange={e => setUserName(e.target.value)}></input>
                </label>

                <label>
                    <p>Password</p>

                    <input type="Password" onChange={e => setPassword(e.target.value)}></input>
                </label>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}