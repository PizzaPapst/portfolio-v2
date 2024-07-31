import React from "react"
import avatar from '../images/avatar.jpg';
import '../styles/avatar.css';

export default function Navbar() {
    return (
        <div>
            <img className="avatar" alt="Maik Bartels" src={avatar}/>
        </div>
            
    )
}