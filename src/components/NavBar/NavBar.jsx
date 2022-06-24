import React from 'react';
import CardWidget from '../CardWidget';
import './NavBar.css'
import logo from '../../assets/logo.png'

const NavBar = () => {
    return (
        <ul className="ancho">
            <a href="https://peopleco.com.ar"><img src={logo} height = '65' width='200' alt="" /></a>
            <li><a className="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <div><CardWidget/></div>
        </ul>
    )
}

export default NavBar