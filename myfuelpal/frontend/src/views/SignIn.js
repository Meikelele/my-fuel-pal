import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import config from '../config';
import '../styles/signin.css';
import '../components/styles/button.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const postLogin = async (event) => {
        event.preventDefault();

        try {

            console.log('email: ', email);
            console.log('pass: ', password);
            const res = await axios.post("http://localhost:8080/api/auth/authenticate", {
                email: email,
                password: password,
            });
            console.log('token: ', res.data.token);
            localStorage.setItem('token', res.data.token);
            navigate('/home');
        } catch (e) {
            if (e.response && e.response.status === 403) {
                console.log(e);
                setError('Wrong username or password');
                setPassword('');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || password === '') {
            setError('Type login and password');
        } else {
            postLogin(event);
        }
    };

    return (
        <main className='signin'>
            <h2 className='header'>Welcome back!</h2>
            <p className='subtext'>Fill in your details to login</p>

            <form className='signin__form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='email@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <div className='error-text login-error'>{error}</div>}
                <div className='gap' />
                <button type='submit' className='button__login'>Login</button>
            </form>
        </main>
    );
};

export default SignIn;
