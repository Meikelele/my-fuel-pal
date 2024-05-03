import React from 'react';

import Layout from './Layout';
import '../styles/welcome.css';

import Button from '../components/Button';
import Logo from '../images/log.svg';

import {Link} from "react-router-dom";
class Welcome extends React.Component {
    render() {
        return (   
            <Layout>   
                <main className='welcome'>
                    <img src={Logo} alt="Logo" width={200} height={200}/>
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
            </Layout>     
        );
    }
}
export default Welcome;