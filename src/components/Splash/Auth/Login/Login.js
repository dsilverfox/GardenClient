import React from 'react';
import './Login.css';
import { Form, Label, Input, Button } from 'reactstrap';

const Login = props => {
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/login", {
            method: "POST",
            body: JSON.stringify({ 
                user: { 
                    email: props.email, 
                    password: props.password 
                }, 
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                props.updateToken(data.sessionToken);
            });
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                    <Label htmlFor="emailInput">Email </Label>
   
                    <Input
                        id="emailInput"
                        type="email"
                        placeholder="Email Login"
                        onChange={(e) => props.setEmail(e.target.email)}
                        value={props.email}
                    />
                    <Label htmlFor="passwordInputLogin">Password </Label>
                    <Input
                        id="passwordInputLogin"
                        type="password"
                        placeholder="Login Password"
                        onChange={(e) => props.setPassword(e.target.password)}
                        value={props.password}
                    />
                    {/* {((props.email) && (props.password)) ?  */}
                    <Button type="submit">Login</Button> 
                    {/* // : <div></div>} */}
 
            </Form>
            </div>
            
    );
};

export default Login;
