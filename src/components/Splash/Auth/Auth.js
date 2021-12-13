import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import Register from './Register/Register';
import Login from './Login/Login';

const Auth = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container className='auth-container'>
            <Row>
                <Col md='6'>
                    <Register updateToken={props.updateToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword}  />
                </Col>
                <Col md='6' className='login-col'>
                    <Login updateToken={props.updateToken} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;