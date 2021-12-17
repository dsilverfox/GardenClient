import './App.css';
import React, {useEffect, useState} from 'react';
// import Splash from  './components/Splash/Splash';
import Sitebar from './Navbar'
import NoteIndex from './components/Splash/Notes/NoteIndex';
import Plant from './components/Splash/Plant/Plant';
import Welcome from './components/Splash/Welcome';

function App() {
     const [sessionToken, setSessionToken] = useState("");

      useEffect(() => {
        if (localStorage.getItem('token')) {
          setSessionToken(localStorage.getItem('token'));
        }
      }, [])

      const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
        console.log(sessionToken);
      }

      const clearToken = () => {
        localStorage.clear();
        setSessionToken(' ');
      }


const protectedViews = () => {
  return(sessionToken === localStorage.getItem('token') ? <NoteIndex token={sessionToken}/> : <Welcome />)
}
  return (
    <div className="App">
      {protectedViews()}
      <Plant />
      <Sitebar clickLogout={clearToken} updateToken={updateToken} />
    </div>
  )
}
 

export default App;
