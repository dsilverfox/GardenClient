import React, { useState } from 'react';
import './Splash.css';
import Auth from './Auth/Auth';
import Plant from './Plant/Plant';

function Splash() {


    return (
        <div>
            I'm the splash screen. 
            <Auth />
            <Plant/>
        </div>
    )
}

//const Splash = () => {

//}

export default Splash;