import React from 'react';
import {Link} from "react-router-dom";

import Layout from './Layout';
import '../styles/dashboard.css';

import Menu from '../components/Menu';
import JustLine from '../components/JustLine';
import CarTile from '../components/CarTile';
import FuelNote from '../components/FuelNote';

const Cars = [
    {
        nickname: 'Gruzik',
        info: 'BMW E36 2.5L Benzyna 250 tys. km',
        country: 'PL',
        number: 'KPR 56019'
    },
    {
        nickname: 'Lichwiarz',
        info: 'BMW E36 2.5L Benzyna 250 tys. km',
        country: 'PL',
        number: 'RSA 14901'
    }
]

class Dashboard extends React.Component {
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
                            <Link to='/mycars'>
                                <button className='button__viewall'>View all</button>
                            </Link>
                        </div>

                        <section className='tiles'>
                            {Cars.map((car, index) => (
                                <CarTile key={index} nickname={car.nickname} info={car.info} country={car.country} number={car.number} />
                            ))}
                        </section>
                        <JustLine />

                        {/* MyFuelNote section */}
                        <div className='content__header'>
                            <div className='content__header__texts'>
                                <h1 className='header'>MyFuelPal</h1>
                                <p className='subtext'>just your fuelnotes</p>
                            </div>
                            <Link to='/myfuelpal'>
                                <button className='button__viewall'>View all</button>
                            </Link>
                        </div>
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