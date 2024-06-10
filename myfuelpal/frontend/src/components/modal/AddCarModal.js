// AddCarModal.js
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import axios from 'axios';

import Backdrop from './backdrop/backdrop';
import './modal.css';

// animacja Modala
const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: '100vh',
        opacity: 0
    }
};

const AddCarModal = ({ handleClose, updateCarList }) => {
    const [nickname, setNickname] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [course, setCourse] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [country, setCountry] = useState('');
    const [fuel, setFuel] = useState('');
    const [description, setDescription] = useState('');

    const funPostAXIOS = () => {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:8080/api/vehicles', 
            {
                nickname: nickname,
                brand: brand,
                model: model,
                course: course,
                licensePlate: licenseNumber,
                country: country,
                fuel: fuel,
                description: description
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        .then((response) => {
            console.log(response);
            updateCarList();
            handleClose();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleAddCar = () => {
        funPostAXIOS();
    };

    return (
        <Backdrop onClick={handleClose}>
            <motion.div 
                onClick={(e) => e.stopPropagation()} 
                className='modal' 
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                <section className='modal__section'>               
                    <h2>Add new car</h2>
                    <input type='text' placeholder='*Nickname' value={nickname} onChange={(e) => setNickname(e.target.value)} />
                    <input type='text' placeholder='*Brand' value={brand} onChange={(e) => setBrand(e.target.value)} />
                    <input type='text' placeholder='*Model' value={model} onChange={(e) => setModel(e.target.value)} />
                    <input type='text' placeholder='*Course' value={course} onChange={(e) => setCourse(e.target.value)} />
                    <input type='text' placeholder='*License number' value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} />
                    <input type='text' placeholder='*Country' value={country} onChange={(e) => setCountry(e.target.value)} />
                    <input type='text' placeholder='*Fuel' value={fuel} onChange={(e) => setFuel(e.target.value)} />
                    <textarea name="description" rows="5" placeholder="Some note..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <p className='subtext'>*not null areas</p>
                    <button className='button__close' onClick={handleAddCar}>Save and close</button>
                </section>
            </motion.div>
        </Backdrop>
    );
};

export default AddCarModal;
