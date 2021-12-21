import React from 'react';
import './Login.css';
import { Form, Label, Input, Button } from 'reactstrap';
import APIURL from '../../../../helpers/environment'

const Login = props => {
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
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
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                    <Label htmlFor="emailInput">Email </Label>
   
                    <Input
                        id="emailInput"
                        type="email"
                        placeholder="Email Login"
                        onChange={(e) => props.setEmail(e.target.value)}
                        value={props.email}
                    />
                    <Label htmlFor="passwordInputLogin">Password </Label>
                    <Input
                        id="passwordInputLogin"
                        type="password"
                        placeholder="Login Password"
                        onChange={(e) => props.setPassword(e.target.value)}
                        value={props.password}
                    />
                    {/* {((props.email) && (props.password)) ?  */}
                    <Button type="submit">Login</Button>
                     {/* : <div></div>} */}
 
            </Form>
            </div>
            
    );
};

export default Login;
