import React from "react"
import '../styles/navBar.css';
import '../styles/textStyles.css';

export default function Navbar() {
    return (
        <nav>
            <h2 className="logo">MB</h2>
            <div>
                <ul className="links">
                    <li className="navItem"><a href="default.asp">Work</a></li>
                    <li className="navItem"><a href="news.asp">About</a></li>
                </ul>
            </div>
        </nav>
    )
}