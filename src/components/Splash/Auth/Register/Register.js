import React, { useState } from "react";
import "./Register.css";

const Signup = (props) => {
    return (
        <div>
            <div className="loginHeader">
                <h4>ClickChef</h4>
                <p>Welcome to ClickChef</p>
            </div>
            <div className="loginInputs">
                <div>
                    <label htmlFor="emailInput">Email</label>
                    <br />
                    <input
                        id="emailInput"
                        type="email"
                        placeholder="eamil"
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
                    Need to login?{" "}
                    <span id="highlight" onClick={() => props.setLogin(!props.Login)}>
                        Click here
                    </span>
                    .
                </p>
            </div>
        </div>
    );
};

export default Signup;