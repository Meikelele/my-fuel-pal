import React, { useEffect } from 'react';
import '../styles/welcome.css';
import Button from '../components/Button';
import Logo from '../images/log.svg';
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/home');
        }
    }, []);




    return (
            <main className='welcome'>
                {/* <img src={Logo} alt="Logo" width={200} height={200}/> */}
                <h2 className='header'>MyFuelPal</h2>
                <p className='subtext'>Track your refueling history</p>

                <Link to='/registerek'>
                    <Button text="SignUp" />
                </Link>
                <p className='subtext'>or</p>
                <Link to='/loginek'>
                    <Button text="Login" />
                </Link>

                <Button text="Connect with Facebook" />
            </main>
        
    );
}

export default Welcome;
