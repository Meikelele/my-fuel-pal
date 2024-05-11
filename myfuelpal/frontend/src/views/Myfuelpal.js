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
                        <Content header='MyFuelPal' subtext='just your fuelnotes' link='/addfuelnote' buttonName='Add note'/>
                        <section className='fuelnote_tiles'>
                            <FuelNote />
                            <FuelNote />
                            <FuelNote />
                            <FuelNote />
                            <FuelNote />
                            <FuelNote />
                            <FuelNote />
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