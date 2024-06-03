import { motion } from 'framer-motion';
import React, { useState } from 'react';

import Backdrop from './backdrop/backdrop';
import StyledInput from '../../components/StyledInput';
import Button from '../../components/Button';

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

const AddCarModal = ({ handleClose }) => {

    const handleAddCar = () => {
        handleClose();
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
                                <input type="file" className='upload_file'></input>
                                <StyledInput type='text' text='*Nickname' />
                                <select name='brand'>
                                    {/* POBIERANIE Z BAZY DANYCH */}
                                    <option>BMW</option>
                                    <option>AUDI</option>
                                    <option>LEXUS</option>
                                </select>
                                <select name='model'>
                                    {/* POBIERANIE Z BAZY DANYCH */}
                                    <option>E46</option>
                                    <option>E36</option>
                                    <option>A4</option>
                                    <option>A5</option>
                                    <option>IS 200</option>
                                </select>
                                <StyledInput type='text' text='*Course' />
                                <StyledInput type='text' text='*License number' />
                                <StyledInput type='text' text='*Country' />
                                <select name='fuel'>
                                    {/* POBIERANIE Z BAZY DANYCH */}
                                    <option>ON</option>
                                    <option>PB 95</option>
                                    <option>PB 98</option>
                                    <option>LPG</option>
                                </select>
                                <textarea name="description" rows="5" placeholder="Some note..."></textarea>
                                <p className='subtext'>*not null areas</p>
                                <button className='button__close' onClick={handleClose}>Save and close</button>
                        </section>
            </motion.div>
        </Backdrop>
    );
};

export default AddCarModal;