import React from 'react';
import './styles/fuelnote.css';

import JustLine from './JustLine';

import Gasoline from '../images/gasoline.svg';
import Clock from '../images/clock.svg';


const FuelNote = () => {
    return (
        <div className='fuelnotetile'>
            <div className='fuelnotetile__main'>
                <div className='fuelnotetile__main__image'>
                    <img src={Clock} alt="ikonka" />
                </div>
                <div className='fuelnotetile__main__texts'>
                    <h2 className='header'>22:15</h2>
                    <p className='subtext'>Sat - 31th July 2024</p>
                    <h3>Gruzik</h3>
                </div>
                {/* LINIA PIONOWA */}
                <div className='fuelnotetile__main__image'>
                    <img src={Gasoline} alt="ikonka" />
                </div>
                <div className='fuelnotetile__main__texts'>
                    <h2 className='header'>200 zł</h2>
                    <p className='subtext'>34.5  L</p>
                </div>
            </div>
            <JustLine />
            <div className='fuelnotetile__end'>
                <p className='subtext'>Lorem ipsum cos tam cos tam nie wiem nie wiem</p>
            </div>
        </div>
    )
};

export default FuelNote;