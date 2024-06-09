import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/global.css';
import '../styles/dashboard.css';

import Menu from '../components/Menu';
import JustLine from '../components/JustLine';
import CarTile from '../components/CarTile';
import AddCarModal from '../components/modal/AddCarModal';
import MobileMenu from '../components/MobileMenu';

import axios from 'axios';

const MyCars = () => {

    const funkcjaAXIOS = () => {
        //wyslij zadanie pod ten adres sciagniecia danych
        axios.get('http://localhost:8080/api/vehicles', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            console.log(response);
            setCar(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
    const navigate = useNavigate();

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const [car, setCar] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
        }
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        window.addEventListener('resize', handleResize);

        funkcjaAXIOS();

        return () => window.removeEventListener('resize', handleResize);


    }, []);

    return (   
        // <Layout>   
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
                            {car.map((car, index) => (
                                <CarTile
                                    key={index}
                                    nickname={car.nickname}
                                    brand={car.brand}
                                    model={car.model}
                                    // engine={car.engine}
                                    fuel={car.fuel}
                                    mileage={car.course}
                                    
                                    country={car.country}
                                    number={car.licensePlate}
                                />
                            ))}
                        </section>
                        <JustLine />
                    </section>
                </div>
                {isMobile && <MobileMenu />}

                <AnimatePresence>
                {isOpen && <AddCarModal handleClose={close} />}
            </AnimatePresence>
            </main>

            
        // </Layout>     
    );
};

export default MyCars;
