import React, { useState } from 'react';
import './Splash.css';
import Auth from './Auth/Auth';
import Plant from './Plant/Plant';

function Splash() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            I'm the splash screen. 
            <Auth email = {email} setEmail= {setEmail} password = {password} setPassword = {setPassword}/>
            <Plant/>
        </div>
    )
}

//const Splash = () => {

//}

export default Splash;