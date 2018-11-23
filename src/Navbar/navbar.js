import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => (

    <ul>
    <li><Link to='/'>Login</Link></li>
    <li><Link to='Login'>Register</Link></li>
    </ul>
)

export default Navbar;