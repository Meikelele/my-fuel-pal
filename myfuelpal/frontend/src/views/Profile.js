import React from 'react';
import {Link} from "react-router-dom";

import Layout from './Layout';
import '../styles/dashboard.css';
import '../styles/profile.css';

import Avatar from '../images/Triss.jpeg';
import Menu from '../components/Menu';
import Content from '../components/Content';


class Profile extends React.Component {
    render() {
        return (   
            <Layout>   
                <main className='dashboard'>
                    <Menu />
                    <section className='content'>
                        <Content header='Profile' subtext='just your profile'  link='/profile' buttonName='Logout'/>

                    <div className='profile'>
                        <div class="profile__logo">
                            <img src={Avatar} alt="Avatar" />
                        </div>

                        <div class="profile__texts">
                            <h2 className='header'>Triss Merigold</h2>
                            <p className='subtext'>triss.merigold@gmail.com</p>
                        </div>
                    </div>
                    
                    </section>

                </main>
            </Layout>     
        );
    }
}
export default Profile;