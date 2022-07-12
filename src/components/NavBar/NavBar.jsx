import React from 'react';
import CardWidget from '../CardWidget';
import './NavBar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
        <ul className="ancho">
        <a href="https://peopleco.com.ar"><img src={logo} height = '65' width='200' alt="" /></a>
        <li className="active"><Link to='/'>Home</Link></li>
        <li><Link to='/category/electronics'>Electronics</Link></li>
        <li><Link to='/category/jewelery'>Jewelery</Link></li>
        <li><Link to="/category/women's clothing">Women's Clothing</Link></li>
        <li><Link to="/category/men's clothing">Mens's Clothing</Link></li>
        <div><CardWidget/></div>
    </ul>
    </header>
        
    )
}

export default NavBar