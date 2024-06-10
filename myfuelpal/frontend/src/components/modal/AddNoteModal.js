import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
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

const AddNoteModal = ({ handleClose }) => {
    const [price, setPrice] = useState('');
    const [liters, setLiters] = useState('');
    const [time, setTime] = useState('');
    const [kal, setKal] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const funPostAXIOS = () => {

        const token = localStorage.getItem('token');
        axios.post('http://localhost:8080/api/fuelnotes', 
            {
                price: price,
                liters: liters,
                kalendarz: kal,
                time: time + ':00',
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
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleAddFuelpal= () => {
        if (liters === '' || price === '' || time === '' || kal === '') {
            setError('Fill all required fields');
            return;
        }
        funPostAXIOS();
        handleClose();
    };

    useEffect(() => {
        const now = new Date();
        const formattedDate = now.toISOString().slice(0, 10);
        const formattedTime = now.toTimeString().slice(0, 5);

        setKal(formattedDate);
        setTime(formattedTime);
    }, []);

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
                                <input type='text' placeholder='*Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                                <input type='text' placeholder='*Liters' value={liters} onChange={(e) => setLiters(e.target.value)} />
                                <input type='time' placeholder='*Time' value={time} onChange={(e) => setTime(e.target.value)} />
                                <input type='date' placeholder='*Date' value={kal} onChange={(e) => setKal(e.target.value)} />
                                <textarea name="description" rows="5" placeholder="Some note..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                <p className='subtext'>*not null areas</p>
                                {error && <p className='error'>{error}</p>}
                                <button className='button__close' onClick={handleAddFuelpal}>Save and close</button>

                        </section>
            </motion.div>
        </Backdrop>
    );
};

export default AddNoteModal;