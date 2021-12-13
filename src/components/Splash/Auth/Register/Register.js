import React from "react";
import "./Register.css";
import {Form, Label, Input, Button} from 'reactstrap';

const Register = props => {
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/register", {
            method: "POST",
            body: JSON.stringify({ user: { email: props.email, password: props.password }, }),
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
                <div>
                    <Label htmlFor="emailInput">Email</Label>
                    <br />
                    <Input
                        id="emailInput"
                        type="email"
                        placeholder="email"
                        onChange={(e) => props.setEmail(e.target.value)}
                        value={props.email}
                    />
                </div>
                <br />
                <div>
                    <Label htmlFor="passwordInput">Password</Label>
                    <br />
                    <Input
                        id="passwordInput"
                        type="password"
                        placeholder="password"
                        onChange={(e) => props.setPassword(e.target.value)}
                        value={props.password}
                    />
                </div>
              </Form>
            <div className="formControls">
                <Button type="submit">Submit</Button>
            </div>
        </div>
    );
};

export default Register;