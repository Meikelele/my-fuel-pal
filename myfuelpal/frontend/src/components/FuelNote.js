import React from 'react';
import './styles/fuelnote.css';

import JustLine from './JustLine';

import Gasoline from '../images/gasoline.svg';
import Clock from '../images/clock.svg';

const FuelNote = (props) => {
    const formattedDate = props.date ? props.date.slice(0, 10) : '0000-00-00';
    const formattedTime = props.time ? props.time.slice(0, 5) : '00:00';

    return (
        <div className='fuelnotetile'>
            <div className='fuelnotetile__main'>
                <div className='fuelnotetile__main__image'>
                    <img src={Clock} alt="ikonka" />
                </div>
                <div className='fuelnotetile__main__texts'>
                    <h2 className='header'>{formattedTime}</h2>
                    <p className='subtext'>{formattedDate}</p>
                    <h3>{props.nickname}</h3>
                </div>
                {/* LINIA PIONOWA */}
                <div className='fuelnotetile__main__image'>
                    <img src={Gasoline} alt="ikonka" />
                </div>
                <div className='fuelnotetile__main__texts'>
                    <h2 className='header'>{props.price} zł</h2>
                    <p className='subtext'>{props.liters} L</p>
                </div>
            </div>
            <JustLine />
            <div className='fuelnotetile__end'>
                <p className='subtext'>{props.description}</p>
            </div>
        </div>
    )
};

export default FuelNote;
