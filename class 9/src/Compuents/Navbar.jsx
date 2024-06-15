import React from 'react';
import {Link} from 'react-router-dom'    

const Navbar = () => {
    return (
        <>
        <ul>
            <li><Link to ='/'>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='conact'>Conact</Link></li>
            <li><Link to='services'>Services</Link></li>
            <li><Link to='product/'>Product</Link></li>
        </ul>
        </>
    )
}


export default Navbar