import React from "react"
import '../styles/navBar.css';
import '../styles/textStyles.css';

export default function Navbar() {
    return (
        <nav>
            <h2 className="logo">MB</h2>
            <div>
                <ul className="links">
                    <Link href="/Work">Work</Link>
                    <Link href="/About">About</Link>
                </ul>
            </div>
        </nav>
    )
}

function Link ({href, children}){
    const path = window.location.pathname

    return(
        <li className={ path === href ? 'navItem selected' : "navItem"}>
            <a href={href}>
                {children}
            </a>
        </li>
    )
}