import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../styles/global.css';
import '../styles/dashboard.css';

import Menu from '../components/Menu';
import JustLine from '../components/JustLine';
import CarTile from '../components/CarTile';
import FuelNote from '../components/FuelNote';
import MobileMenu from '../components/MobileMenu';

const Dashboard = () => {


    const [fuelnote, setFuelnote] = useState([]);
    const [cars, setCars] = useState([]);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const axiosGetCars = () => {
        axios.get('http://localhost:8080/api/vehicles', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            console.log(response);
            setCars(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const axiosGetFuelnotes = () => {
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
        axiosGetCars();
        axiosGetFuelnotes();
        const handleWindowResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const isMobile = screenWidth <= 500;

    return (      
            <main>
                <Menu />
                <div className='submain'>
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
                        <section className='content__tiles'>
                            {cars.map((car, index) => (
                                <CarTile
                                    key={index}
                                    nickname={car.nickname}
                                    brand={car.brand}
                                    model={car.model}
                                    fuel={car.fuel}
                                    mileage={car.course}
                                    country={car.country}
                                    number={car.licensePlate}
                                    desc = {car.description}
                                />
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
            </main>    
    );
};

export default Dashboard;
