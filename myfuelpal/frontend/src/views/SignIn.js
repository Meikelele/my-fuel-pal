import React from 'react';

import Layout from './Layout';
import '../styles/signin.css';

import Button from '../components/Button';
import StyledInput from '../components/StyledInput';


import {Link} from "react-router-dom";

class SignIn extends React.Component {
    render() {
            return ( 

                <Layout>   
                    <main className='signin'>
                        <h2 className='header'>Welcome back!</h2>
                        <p className='subtext'>Fill in your details to login </p>

                        <form className='signin__form'>
                            <StyledInput type='name' text='email@example.com'/>
                            <StyledInput type='password' text='password' />
                            <div className='gap'/>
                            <Button text="Login" />
                        </form>
                    </main>
                </Layout>    

            );
    }
}

export default SignIn;