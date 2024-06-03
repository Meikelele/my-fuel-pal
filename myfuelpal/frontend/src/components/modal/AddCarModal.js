import { motion } from 'framer-motion';
import React, { useState } from 'react';

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

const Modal = ({ handleClose }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const taskNameChange = (event) => {
        setTaskName(event.target.value);
    };

    const taskDescriptionChange = (event) => {
        setTaskDescription(event.target.value);
    };

    const handleAddTask = () => {
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
                <section className='addcar'>
                            <form className='addcar__form'>
                                <img src={File} alt="Logo" width={80} height={80}/>
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
                                <Button text="Save" />
                            </form>
                        </section>

                <button className='buttonaddtask' onClick={handleAddTask}>
                    Close Previev
                </button>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;