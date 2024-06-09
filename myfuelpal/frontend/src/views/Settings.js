import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

import Layout from './Layout';
import '../styles/dashboard.css';
import '../styles/settings.css';

import Menu from '../components/Menu';
import MobileMenu from '../components/MobileMenu';

const Settings = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
        }
        
        const handleWindowResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const handleSecurityOption = (option) => {
        // Add logic for handling each security option
        switch (option) {
            case 'changePassword':
                // Navigate to change password page
                navigate('/change-password');
                break;
            case 'changeUsername':
                // Navigate to change username page
                navigate('/change-username');
                break;
            case 'changeEmail':
                // Navigate to change email page
                navigate('/change-email');
                break;
            default:
                break;
        }
    };

    const isMobile = screenWidth <= 500;

    return (   
            <main className='dashboard'>
                <Menu />
                <section className='content'>
                    {/* MyCars section */}
                    <div className='content__header'>
                        <div className='content__header__texts'>
                            <h1 className='header'>Settings</h1>
                            <p className='subtext'>just your settings</p>
                        </div>
                    </div>
                    
                    <div className="chapter">
                        <h2 className='header'>Security</h2>
                        <div className="option" onClick={() => handleSecurityOption('changePassword')}>
                            <p className='subtext'>Change password</p>
                            <div className='button'>change</div>
                        </div>
                        <div className="option" onClick={() => handleSecurityOption('changeUsername')}>
                            <p className='subtext'>Change username</p>
                            <div className='button'>change</div>
                        </div>
                        <div className="option" onClick={() => handleSecurityOption('changeEmail')}>
                            <p className='subtext'>Change email</p>
                            <div className='button'>change</div>
                        </div>
                    </div>
                </section>
                {isMobile && <MobileMenu />}
            </main>   
    );
};

export default Settings;
