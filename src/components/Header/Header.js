import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header>
            <NavLink to='/' style={{ textDecoration: 'none', color: "white" }}>
                <h1>Rancid Tomatillos</h1>
            </NavLink>
        </header>
    );
};

export default Header;