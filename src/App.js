import './App.css';
import React, {useEffect, useState} from 'react';
import Splash from  './components/Splash/Splash';
import NoteIndex from './components/Splash/Notes/NoteIndex';
import Auth from './components/Splash/Auth/Auth'

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

      const protectedViews = () => {
        return(sessionToken === localStorage.getItem('token') ? <NoteIndex token={sessionToken}/> : <Auth updateToken={updateToken} />)
      }
  return (
    <div className="App">
      I am the app screen.
      <Splash updateToken = {updateToken} clearToken = {clearToken} sessionToken={sessionToken} setSessionToken={setSessionToken}/>
      {protectedViews()}
    </div>
  )
}
 
export default App;