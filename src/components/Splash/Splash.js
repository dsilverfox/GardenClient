import React, { useState } from 'react';
import NoteIndex from './Notes/NoteIndex';
import './Splash.css';
import Auth from './Auth/Auth';
import Plant from './Plant/Plant';

function Splash() {

    

    return (
        <div>
            I'm the splash screen. I like to Auth and Plant.
            <Auth />
            <Plant/> 
        </div>
    )
}

//const Splash = () => {

//}

export default Splash;