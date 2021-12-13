import React from "react";
import "./Register.css";

const Signup = (props) => {
    return (
        <div>
            <div className="loginHeader">
                <h4>I are the Register!</h4>
                <p>Join us!</p>
            </div>
            <div className="loginInputs">
                <div>
                    <label htmlFor="emailInput">Email</label>
                    <br />
                    <input
                        id="emailInput"
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
        </div>
    );
};

export default Signup;