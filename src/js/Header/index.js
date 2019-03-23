import React from 'react';
import './head.css';
const Header = () =>{
    return (
        <header>
        <div className="empty-child"></div>
        
            <div className="child">
                <a > <img className="logo" alt="Logo"/></a>
            </div>
            <nav className="child ul-nav" >
                <ul className="land-nav">
                    <li>About app</li>
                    <li> Blog </li>
                    <li> Contact Us</li>
                    <li className="button-nav"> Notify me</li> 
                </ul>
            </nav>
           <div className="empty-child"></div>
        </header>
    )
}

export default Header;