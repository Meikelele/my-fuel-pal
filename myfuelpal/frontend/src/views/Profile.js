import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';
import '../styles/global.css';
import '../styles/dashboard.css';
import '../styles/profile.css';

import Avatar from '../images/Triss.jpeg';
import Menu from '../components/Menu';

import MobileMenu from '../components/MobileMenu';

class Profile extends React.Component {
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
                <main>
                    <Menu />
                    <section className='content'>

                        {/* Profile section */}
                        <div className='content__header'>
                            <div className='content__header__texts'>
                                <h1 className='header'>Profile</h1>
                                <p className='subtext'>just your profile</p>
                            </div>
                            <Link to='/'>
                                <button className='button__profile'>logout</button>
                            </Link>
                        </div>

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
                    {isMobile ? <MobileMenu /> : null}
                </main>
            </Layout>
        );
    }
}

export default Profile;
