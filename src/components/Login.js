import React, {useState} from 'react';
//import PropTypes from 'prop-types';
import '../styles/styles-login.css';

async function LoginUser(credentials) {
    //console.log(credentials);
    return fetch('http://localhost:8080/Requisiciones/server_login.php', {//Login
        method: 'POST',
        mode: 'cors',
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
        //console.log(username);
        //console.log(password);
        const token = await LoginUser({
            username: username,
            password: password
        });
        console.log(token);
        setToken(token);
    }

    return(
        <div id="body-content">
            <div id="div-img">
                <img alt="Logo Petromar"></img>
            </div>
            <div id="div-form">
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
            
        </div>
    )
}

/*  PARECE QUE LA FUNCION PASA SIN ESTA DECLARACION, SI FALLA LA FUNCION 'setToken' DESCOMENTAR JUNTO CON EL 'import PropTypes'  */
//  Login.propTypes = {
//      setToken: PropTypes.func.isRequired
//  }