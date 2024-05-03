import React from 'react';

import Layout from './Layout';
import '../styles/signin.css';

import Button from '../components/Button';
import StyledInput from '../components/StyledInput';


import {Link} from "react-router-dom";

class SignUp extends React.Component {
    render() {
        return ( 

            <Layout>   
                <main className='signin'>
                    <h2 className='header'>Start together!</h2>
                    <p className='subtext'>Fill in your details to register </p>

                    <form className='signin__form'>
                        <StyledInput type='name' text='Name'/>
                        <StyledInput type='name' text='Surname'/>
                        <StyledInput type='name' text='email@example.com'/>
                        <StyledInput type='password' text='password' />
                        <StyledInput type='password' text='password' />
                        <div className='gap'/>
                        <Button text="SignUp" />
                    </form>
                </main>
            </Layout>    

        );
}
}
export default SignUp;