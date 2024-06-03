import React from 'react';
import {Link} from "react-router-dom";

import Layout from './Layout';
import '../styles/dashboard.css';
import '../styles/global.css'

import Menu from '../components/Menu';
import JustLine from '../components/JustLine';
import CarTile from '../components/CarTile';

const Cars = [
    {
        nickname: 'Gruzikk',
        brand: 'BMW',
        model: 'E36',
        engine: '2.5L',
        fuel: 'Benzyna',
        mileage: '250 000',
        unit: 'km',
        country: 'PL',
        number: 'KPR 56019'
    },
    {
        nickname: 'Lichwiarz',
        brand: 'BMW',
        model: 'E36',
        engine: '2.5L',
        fuel: 'Benzyna',
        mileage: '250 000',
        unit: 'km',
        country: 'PL',
        number: 'RSA 14901'
    }
]


class Mycars extends React.Component {
    render() {
        return (   
            <Layout>   
                <main className='dashboard'>
                    <Menu />
                    <section className='content'>

                        <div className='content__header'>
                            <div className='content__header__texts'>
                                <h1 className='header'>MyCars</h1>
                                <p className='subtext'>just your cars</p>
                            </div>
                            <button className='button__viewall'>View all</button>
                        </div>

                        <section className='tiles'>
                            {Cars.map((car, index) => (
                                <CarTile key={index} nickname={car.nickname} brand={car.brand} model={car.model} engine={car.engine} fuel={car.fuel} mileage={car.mileage} unit={car.unit} country={car.country} number={car.number} />
                            ))}
                        </section>
                        <JustLine />
                        
                    </section>
                </main>
            </Layout>     
        );
    }
}
export default Mycars;