import React, { useState } from 'react';
import './Login.css';

const Login = props => {
    return (
        <div>
            <div className="loginHeader">

            </div>
            <div className="loginInputs">
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        id="email"
                        type="email"
                        placeholder="email"
                        onChange={(e) => props.setEmail(e.target.value)}
                        value={props.email}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="passwordInput">Password</label>
                    <br />
                    <input
                        id="passwordInput"
                        type="password"
                        placeholder="password"
                        onChange={(e) => props.setPassword(e.target.value)}
                        value={props.password}
                    />
                </div>
            </div>
            <div className="formControls">
                <button type="submit">Submit</button>
            </div>
            <div className="loginFooter">
                <p>
                    {" "}
                    Need an account?{" "}
                    <span id="highlight" onClick={() => props.setLogin(!props.login)}>
                        Signup here
                    </span>
                    .
                </p>
            </div>
        </div>
    );
}

export default Login;