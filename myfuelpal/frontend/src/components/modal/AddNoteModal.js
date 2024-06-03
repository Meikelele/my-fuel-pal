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

const AddNoteModal = ({ handleClose }) => {

    const handleAddFuelpal= () => {
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
                                <StyledInput type='text' text='*Price' />
                                
                                <StyledInput type='text' text='*Liters' />
                                    {/* CZAS i DATA maja sie domyslnie ustawiac na aktualna */}
                                <StyledInput type='time' text='*Time' />
                                <StyledInput type='date' text='*Date' />
                                <select name='car__select'>
                                    {/* POBIERANIE Z BAZY DANYCH */}
                                    {/* NIECH SIE USTAWIA OSTATNIO DODANE AUTO ??? */}
                                    <option>*select</option>
                                    <option>Nickname_1</option>
                                    <option>Nickname_2</option>
                                    <option>Nickname_3</option>
                                    <option>Nickname_4</option>
                                </select>
                                <textarea name="description" rows="5" placeholder="Some note..."></textarea>
                                <p className='subtext'>*not null areas</p>
                                <button className='button__close' onClick={handleClose}>Save and close</button>
                        </section>
            </motion.div>
        </Backdrop>
    );
};

export default AddNoteModal;