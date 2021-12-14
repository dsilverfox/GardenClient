import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Register from './Register/Register';
import Login from './Login/Login';

const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container className='auth-container'>
            <div className='sidenav' id controls>
                <Login updateToken={props.updateToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />

                <Register updateToken={props.updateToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
            </div>
        </Container>
    )
}

export default Auth;