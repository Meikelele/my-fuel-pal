import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const [fuelnote, setFuelnote] = useState([]);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const funkcjaAXIOS = () => {
        axios.get('http://localhost:8080/api/fuelnotes', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            console.log(response);
            setFuelnote(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
        }
        funkcjaAXIOS();

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [navigate]);

    return (
        <main>
            <Menu />
            <div className='submain'>
                <section className='content'>
                    <div className='content__header'>
                        <div className='content__header__texts'>
                            <h1 className='header'>MyFuelpal</h1>
                            <p className='subtext'>just your fuelpal</p>
                        </div>
                        <button className='button__viewall' onClick={open}>Add new</button>
                    </div>
                    
                    <section className='content__tiles'>
                        {fuelnote.map((fuelnote, index) => (
                            <FuelNote
                                key={index}
                                price={fuelnote.price}
                                liters={fuelnote.liters}
                                time={fuelnote.time}
                                date={fuelnote.kalendarz}
                                description={fuelnote.description}
                            />
                        ))}
                    </section>
                    <JustLine />
                </section>
            </div>
            {isMobile && <MobileMenu />}
            <AnimatePresence>
                {isOpen && <AddNoteModal handleClose={close} updateFuelList={funkcjaAXIOS} />}
            </AnimatePresence>
        </main>
    );
}

export default MyFuelPal;
