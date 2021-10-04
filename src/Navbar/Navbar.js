import React from 'react'
import './Navbar.css'
import ducatiLogo from "./ducati_id.png";
export default function Navbar() {
    return (
        <nav className="ducatiNav">
            <ul>
                <li>
                    <a href="/">MODELS</a>
                </li>
                <li>
                   <a href="/"> EVENTS </a>
                </li>
            </ul>
            <img src={ducatiLogo}  alt="Hi"/>
            <ul>
                <li>
                    <a href="/">PRE-OWNED</a>
                </li>
                <li>
                   <a href="/"> DEALERS </a>
                </li>
            </ul>
            <a title="No need to make seperate navbar for mobile coz this is just a clone XD" href="/" className="responModel">MODELS</a>
        </nav>
    )
}
