import './App.css';
import React, {useEffect, useState} from 'react';
import Splash from  './components/Splash/Splash';

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
        setSessionToken('');
      }
  return (
    <div className="App">
      I am the app screen.
      <Splash updateToken = {updateToken} clearToken = {clearToken} sessionToken={sessionToken} setSessionToken={setSessionToken}/>
    </div>
  )
}
 

export default App;
