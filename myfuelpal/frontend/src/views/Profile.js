import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';


import '../styles/global.css';
import '../styles/dashboard.css';
import '../styles/profile.css';

import Avatar from '../images/Triss.jpeg';
import Menu from '../components/Menu';
import MobileMenu from '../components/MobileMenu';

const Profile = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    const axiosGetUser = () => {
        axios.get('http://localhost:8080/api/users', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const isMobile = screenWidth <= 500;

    return (
        
            <main>
                <Menu />
                <section className='content'>
                    {/* Profile section */}
                    <div className='content__header'>
                        <div className='content__header__texts'>
                            <h1 className='header'>Profile</h1>
                            <p className='subtext'>just your profile</p>
                        </div>
                        <Link to='/'>
                            <button className='button__profile'>logout</button>
                        </Link>
                    </div>

                    <div className='profile'>
                        <div className="profile__logo">
                            <img src={Avatar} alt="Avatar" />
                        </div>

                        <div className="profile__texts">
                            <h2 className='header'>Triss Merigold</h2>
                            <p className='subtext'>triss.merigold@gmail.com</p>
                        </div>
                    </div>
                </section>
                {isMobile && <MobileMenu />}
            </main>
    );
};

export default Profile;
