import React from "react";
import "./Register.css";
import {Form, Label, Input, Button} from 'reactstrap';

const Register = props => {
   
    //Password validation code.
    const pwdvalidate = () => {
        let myInput = document.getElementById("psw");
        let letter = document.getElementById("letter");
        let capital = document.getElementById("capital");
        let number = document.getElementById("number");
        let length = document.getElementById("length");

        // When the user clicks on the password field, show the message box
        myInput.onfocus = function () {
            document.getElementById("message").style.display = "block";
        }

        // When the user clicks outside of the password field, hide the message box
        myInput.onblur = function () {
            document.getElementById("message").style.display = "none";
        }

        // When the user starts to type something inside the password field
        myInput.onkeyup = function () {
            // Validate lowercase letters
            var lowerCaseLetters = /[a-z]/g;
            if (myInput.value.match(lowerCaseLetters)) {
                letter.classList.remove("invalid");
                letter.classList.add("valid");
            } else {
                letter.classList.remove("valid");
                letter.classList.add("invalid");
            }

            // Validate capital letters
            var upperCaseLetters = /[A-Z]/g;
            if (myInput.value.match(upperCaseLetters)) {
                capital.classList.remove("invalid");
                capital.classList.add("valid");
            } else {
                capital.classList.remove("valid");
                capital.classList.add("invalid");
            }

            // Validate numbers
            var numbers = /[0-9]/g;
            if (myInput.value.match(numbers)) {
                number.classList.remove("invalid");
                number.classList.add("valid");
            } else {
                number.classList.remove("valid");
                number.classList.add("invalid");
            }

            // Validate length
            if (myInput.value.length >= 8) {
                length.classList.remove("invalid");
                length.classList.add("valid");
            } else {
                length.classList.remove("valid");
                length.classList.add("invalid");
            }
        }
    }

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
        pwdvalidate();
    };
    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="emailInputRegister">Email </Label>
                    <Input
                        id="emailInputRegister"
                        type="email"
                        placeholder="Register Email"
                        onChange={(e) => props.setEmail(e.target.value)}
                        value={props.email}
                    />

                    <Label htmlFor="psw">Password </Label>
                    <Input
                        id="psw"
                        type="password"
                        name='psw'
                        placeholder="Register Password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                        onChange={(e) => props.setPassword(e.target.value)}
                        value={props.password}
                        required
                    />
                    {/* {((props.email) && (props.password)) ?  */}
                    <Button type="submit">Register</Button>
                     {/* : <div></div>} */}
                </div>
              </Form>
            <div id="message">
                <h3>Password must contain the following:</h3>
                <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                <p id="number" class="invalid">A <b>number</b></p>
                <p id="length" class="invalid">Minimum <b>8 characters</b></p>
            </div>
                
        </div>
    );
};

export default Register;