import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, Button} from 'reactstrap';

import Auth from './components/Splash/Auth/Auth'


const Sitebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    return (
        <Navbar color='faded' light expand='md'>
            <NavbarBrand href='/'>Plant Info</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        Authentication placeholder
                    </NavItem>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem> 
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;