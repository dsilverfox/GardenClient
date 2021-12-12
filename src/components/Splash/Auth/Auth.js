import React, { useEffect, useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register'
import "./Auth.css";

const Auth = props => {
    const [login, setLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = login ? "http://localhost:3000/auth/login" : 'http://localhost:3000/auth/signup';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: email,
                    password: password,
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            })
        })
            .then(res => res.json())
            .then(json => console.log(json));

    }

    return (
        <div>
            <Login />
            <Register />
        </div>
    );
}

export default Auth;