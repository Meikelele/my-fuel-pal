import React from 'react';
import './styles/menu.css';

import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div className="menu">
            <h2 className='header'>MyFuelPal</h2>
            <nav>
                    <ul>
                    <Link to='/home'>
                        <li>
                            <i className="fa-solid fa-house"></i>
                             <p>Home</p>
                        </li>
                    </Link>
                    <Link to='/mycars'>
                        <li>
                            <i className="fa-solid fa-house"></i>
                             <p>My Cars</p>
                        </li>
                    </Link> 
                    <Link to='/myfuelpal'>
                        <li>
                            <i className="fa-solid fa-house"></i>
                             <p>MyFuelPal</p>
                        </li>
                    </Link> 
                    <Link to='/profile'>
                        <li>
                            <i className="fa-solid fa-house"></i>
                             <p>Profile</p>
                        </li>
                    </Link> 
                    <Link to='/settings'>
                        <li>
                            <i className="fa-solid fa-house"></i>
                             <p>Settings</p>
                        </li>
                    </Link>  
                    </ul>
            </nav>
        </div>
    );
}

export default Menu;