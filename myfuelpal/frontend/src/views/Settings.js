import React from 'react';
import {Link} from "react-router-dom";

import Layout from './Layout';
import '../styles/dashboard.css';
import '../styles/settings.css';

import Menu from '../components/Menu';
import MobileMenu from '../components/MobileMenu';

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: window.innerWidth
        };
        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize() {
        this.setState({ screenWidth: window.innerWidth });
    }
    render() {
        const { screenWidth } = this.state;
        const isMobile = screenWidth <= 500;
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
                    {isMobile ? <MobileMenu /> : null}
                </main>
                
            </Layout>     
        );
    }
}
export default Settings;