// MyCars.js
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
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
    const [car, setCar] = useState([]);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const updateCarList = () => {
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
    };

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/');
        }
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        window.addEventListener('resize', handleResize);

        updateCarList();

        return () => window.removeEventListener('resize', handleResize);
    }, [navigate]);

    return (   
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
                                fuel={car.fuel}
                                mileage={car.course}
                                desc={car.description}
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
                {isOpen && <AddCarModal handleClose={close} updateCarList={updateCarList} />}
            </AnimatePresence>
        </main>
    );
};

export default MyCars;
