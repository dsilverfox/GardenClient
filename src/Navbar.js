import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, Button} from 'reactstrap';

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
                        <Button onClick={props.clickLogout}>Logout</Button>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;