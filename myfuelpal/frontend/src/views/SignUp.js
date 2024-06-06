import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/signin.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const postSignUp = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const res = await axios.post("http://localhost:8080/api/auth/register", {
                firstName: name,
                lastName: surname,
                email: email,
                password: password,
            });
            localStorage.setItem('token', res.data.token);
            navigate('/home');
        } catch (e) {
            if (e.response && e.response.status === 403) {
                setError('Registration failed');
                setPassword('');
                setConfirmPassword('');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === '' || surname === '' || email === '' || password === '' || confirmPassword === '') {
            setError('Please fill in all fields');
        } else {
            postSignUp(event);
        }
    };

    return (
        <main className='signin'>
            <h2 className='header'>Start together!</h2>
            <p className='subtext'>Fill in your details to register</p>

            <form className='signin__form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Surname'
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
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
                <input
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {error && <div className='error-text'>{error}</div>}
                <div className='gap' />
                <button type='submit'>Sign Up</button>
            </form>
        </main>
    );
};

export default SignUp;
