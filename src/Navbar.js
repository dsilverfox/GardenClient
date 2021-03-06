import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, Button} from 'reactstrap';

const Sitebar = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        let newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }
    return (
        <Navbar id="sitebar" color='faded' light expand='md'>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='ml-auto' navbar>
                        <Button id='logout' onClick={props.clickLogout}>Logout</Button>
                </Nav>
                <NavbarBrand id='footer'>Midwest Tropical Fruits ©2021 Danielle Joy, Devon Silverfox-Patchett and Michelle Owsley, All rights reserved.</NavbarBrand>
            </Collapse>
        </Navbar>
    )
}

export default Sitebar;