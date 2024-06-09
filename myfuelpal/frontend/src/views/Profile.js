import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';


import '../styles/global.css';
import '../styles/dashboard.css';
import '../styles/profile.css';

import Avatar from '../images/Triss.jpeg';
import Menu from '../components/Menu';
import MobileMenu from '../components/MobileMenu';

const Profile = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const [user, setUser] = useState({});

    const axiosGetUser = () => {
        axios.get('http://localhost:8080/api/users/details', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((response) => {
                console.log(response);
                setUser(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {

        if (!localStorage.getItem('token')) {
            navigate('/');
        }

        axiosGetUser();
        const handleWindowResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');


    }

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
                        
                            <button className='button__profile' onClick={handleLogout}>logout</button>
                        
                    </div>

                    <div className='profile'>
                        <div className="profile__logo">
                            <img src={Avatar} alt="Avatar" />
                        </div>

                        <div className="profile__texts">
                            <h2 className='header'>{user.firstName} {user.lastName}</h2>
                            <p className='subtext'>{user.email}</p>
                        </div>
                    </div>
                </section>
                {isMobile && <MobileMenu />}
            </main>
    );
};

export default Profile;
