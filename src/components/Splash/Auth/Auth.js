import React, {useState} from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import{Collapse} from 'react-bootstrap';
import Register from './Register/Register';
import Login from './Login/Login';


const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    const updateToken = props.updateToken;


    return (
        <div>     
        <Button 
        id = 'searchExpand'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Login or Register
      </Button>
      <Collapse in={open} dimension="width">
        <Container className='auth-container'>
            <div className='sidenav' id="controls">
                <Login updateToken={updateToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            </div>
                <div>
                <Register updateToken={updateToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
                </div>
        </Container>
        </Collapse>
        </div>
    )
}

export default Auth;
