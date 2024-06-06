import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Layout from './Layout';
import '../styles/global.css';
import '../styles/dashboard.css';

import Menu from '../components/Menu';
import JustLine from '../components/JustLine';
import CarTile from '../components/CarTile';
import AddCarModal from '../components/modal/AddCarModal';
import MobileMenu from '../components/MobileMenu';

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
];

const MyCars = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (   
        <Layout>   
            <main>
                <Menu />
                <div className="submain">
                    <section className='content'>
                        <div className='content__header'>
                            <div className='content__header__texts'>
                                <h1 className='header'>MyCars</h1>
                                <p className='subtext'>just your cars</p>
                            </div>
                            <button className='button__viewall' onClick={open}>Add new</button>
                        </div>
                        <section className='content__tiles'>
                            {Cars.map((car, index) => (
                                <CarTile
                                    key={index}
                                    nickname={car.nickname}
                                    brand={car.brand}
                                    model={car.model}
                                    engine={car.engine}
                                    fuel={car.fuel}
                                    mileage={car.mileage}
                                    unit={car.unit}
                                    country={car.country}
                                    number={car.number}
                                />
                            ))}
                        </section>
                        <JustLine />
                    </section>
                </div>
                {isMobile && <MobileMenu />}
            </main>

            <AnimatePresence>
                {isOpen && <AddCarModal handleClose={close} />}
            </AnimatePresence>
        </Layout>     
    );
};

export default MyCars;
