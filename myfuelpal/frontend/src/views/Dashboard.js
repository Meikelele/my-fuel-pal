import React from 'react';
import {Link} from "react-router-dom";

import Layout from './Layout';
import '../styles/dashboard.css';

import Menu from '../components/Menu';
import Content from '../components/Content';
import JustLine from '../components/JustLine';
import CarTile from '../components/CarTile';
import FuelNote from '../components/FuelNote';

import DoughnutChart from '../components/Doughnut';

class Dashboard extends React.Component {
    render() {
        return (   
            <Layout>   
                <main className='dashboard'>
                    <Menu />
                    <section className='content'>
                        <Content header='MyCars' subtext='just your cars' link='/mycars' buttonName='View All'/>
                        <section className='tiles'>
                            <CarTile nickname={'Gruzik'} info={'BMW E36 2.5L Benzyna 250 tys. km'} country={'PL'} number={'KPR 56019'} />
                            <CarTile nickname={'Lichwiarz'} info={'BMW E36 2.5L Benzyna 250 tys. km'} country={'PL'} number={'RSA 14901'} />
                            
                        </section>
                        <JustLine />
                        <Content header='MyFuelPal' subtext='just your fuelnotes' link='/myfuelpal' buttonName='View All'/>
                        <section className='fuelnote_tiles'>
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
export default Dashboard;