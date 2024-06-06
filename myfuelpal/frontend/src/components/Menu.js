import React, { useState } from 'react';
import './styles/menu.css';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`menu ${isMenuOpen ? 'open' : 'closed'}`}>
            {/* <button className="menu-toggle" onClick={toggleMenu}>
                {isMenuOpen ? 'Hide Menu' : 'Show Menu'}
            </button> */}
            <div className="menu-content">
                <Link to='/home'>
                    <h2 className='header'>MyFuelPal</h2>
                </Link>
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
                                <i className="fa-solid fa-car"></i>
                                <p>My Cars</p>
                            </li>
                        </Link> 
                        <Link to='/myfuelpal'>
                            <li>
                                <i className="fa-solid fa-gas-pump"></i>
                                <p>MyFuelPal</p>
                            </li>
                        </Link> 
                        <Link to='/profile'>
                            <li>
                                <i className="fa-solid fa-user"></i>
                                <p>Profile</p>
                            </li>
                        </Link> 
                        <Link to='/settings'>
                            <li>
                                <i className="fa-solid fa-cog"></i>
                                <p>Settings</p>
                            </li>
                        </Link>  
                    </ul>
                    <footer>
                        <p>&copy; 2024 MyFuelPal.</p>
                        <p>Wersja aplikacji: 1.0.0</p>
                    </footer>
                </nav>
            </div>
        </div>
    );
}

export default Menu;
