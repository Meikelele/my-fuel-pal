import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Layout from './Layout';
import '../styles/global.css';
import '../styles/dashboard.css';

import Menu from '../components/Menu';
import JustLine from '../components/JustLine';
import FuelNote from '../components/FuelNote';
import AddNoteModal from '../components/modal/AddNoteModal';
import MobileMenu from '../components/MobileMenu';

const MyFuelPal = () => {
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
                <div className='submain'>
                    <section className='content'>
                        
                        {/* MyCars section */}
                        <div className='content__header'>
                            <div className='content__header__texts'>
                                <h1 className='header'>MyFuelpal</h1>
                                <p className='subtext'>just your fuelpal</p>
                            </div>
                            <button className='button__viewall' onClick={open}>Add new</button>
                        </div>
                        
                        <section className='content__tiles'>
                            <FuelNote />
                            <FuelNote />
                            <FuelNote />
                            <FuelNote />
                        </section>
                        <JustLine />
                    </section>
                </div>
                {isMobile && <MobileMenu />}
            </main>

            <AnimatePresence>
                {isOpen && <AddNoteModal handleClose={close} />}
            </AnimatePresence>
        </Layout>     
    );
}

export default MyFuelPal;
