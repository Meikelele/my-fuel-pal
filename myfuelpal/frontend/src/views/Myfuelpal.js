import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Layout from './Layout';

import '../styles/global.css';
import '../styles/dashboard.css';

import Menu from '../components/Menu';
import JustLine from '../components/JustLine';
import FuelNote from '../components/FuelNote';
import AddNoteModal from '../components/modal/AddNoteModal';


const MyFuelPal = () => {

    const [isOpen, setIsOpen] = useState(false);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

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

                    {
                    <AnimatePresence>
                        {isOpen && <AddNoteModal handleClose={close} />}
                    </AnimatePresence>
                    }

                </main>
            </Layout>     
        );
}
export default MyFuelPal;