import React from 'react';
import {Link} from "react-router-dom";

import Layout from './Layout';
import '../styles/dashboard.css';
import '../styles/settings.css';

import Menu from '../components/Menu';
import Content from '../components/Content';

class Settings extends React.Component {
    render() {
        return (   
            <Layout>   
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
                        
                        <div class="chapter">
                            <h2 className='header'>Security</h2>
                            <div class="option">
                                <p className='subtext'>Change password</p>
                                <div className='button'>change</div>
                            </div>
                            <div class="option">
                                <p className='subtext'>Change username</p>
                                <div className='button'>change</div>
                            </div>
                            <div class="option">
                                <p className='subtext'>Change email</p>
                                <div className='button'>change</div>
                            </div>
                        </div>
                    </section>

                </main>
            </Layout>     
        );
    }
}
export default Settings;