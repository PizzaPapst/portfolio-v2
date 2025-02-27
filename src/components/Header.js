import React from "react"
import '../styles/header.css';
import '../styles/textStyles.css';
import { NavLink, Link } from "react-router-dom";
import logo from '../images/logo-mb.svg';


export default function Header() {
    return (
        <nav>
            <Link to="/" className="logo">
                <img alt="logo" src={logo}/>
            </Link>
            <div>
                <ul className="links">
                    <NavLink
                     to="/" 
                     className={({isActive}) => isActive ? "navItem selected" : "navItem"}
                     >
                        Work
                    </NavLink>
                    <NavLink
                     to="/about"
                     className={({isActive}) => isActive ? "navItem selected" : "navItem"}
                     >
                        About
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
