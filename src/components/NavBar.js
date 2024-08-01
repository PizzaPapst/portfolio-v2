import React from "react"
import '../styles/navBar.css';
import '../styles/textStyles.css';

export default function Navbar() {
    return (
        <nav>
            <h2 className="logo">MB</h2>
            <div>
                <ul className="links">
                    <li className="navItem"><a href="/Work">Work</a></li>
                    <li className="navItem"><a href="/About">About</a></li>
                </ul>
            </div>
        </nav>
    )
}