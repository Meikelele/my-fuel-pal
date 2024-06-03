import React from 'react';
import {Link} from "react-router-dom";

import Layout from './Layout';
import '../styles/dashboard.css';

import Menu from '../components/Menu';
import Content from '../components/Content';
import JustLine from '../components/JustLine';
import FuelNote from '../components/FuelNote';

class Myfuelpal extends React.Component {
    render() {
        return (   
            <Layout>   
                <main className='dashboard'>
                    <Menu />
                    <section className='content'>
                        
                        {/* MyCars section */}
                        <div className='content__header'>
                            <div className='content__header__texts'>
                                <h1 className='header'>MyCars</h1>
                                <p className='subtext'>just your cars</p>
                            </div>
                            <button className='button__viewall'>View all</button>
                        </div>
                        
                        <section className='fuelnote_tiles'>
                            <FuelNote />
                            <FuelNote />
                            <FuelNote />
                            <FuelNote />
                        </section>
                        <JustLine />
                    </section>

                </main>
            </Layout>     
        );
    }
}
export default Myfuelpal;