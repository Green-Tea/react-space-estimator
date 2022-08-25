import React from 'react'
import './nav.css'
import logo from '../assets/i-store-go-logo.png'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home"><img src={logo} alt='Navbar' height='51rem;' /></Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Navigation