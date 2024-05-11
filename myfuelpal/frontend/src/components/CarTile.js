import React from 'react';
import './styles/cartile.css';

import Auto from '../images/auto_test_3.jpg';

const CarTile = ({nickname, info, country, number}) => {
    return (
        <div className='cartile'>
            <div className='cartile__image'>
                <img src={Auto} alt='auto'></img>
            </div>
            <div className='cartile__bottom'>
                <div className='cartile__bottom__bar'>
                    <h2>{nickname}</h2>
                    <div className='cartile__bottom__license'>
                        <div className='cartile__bottom__license__country'>{country}</div>
                        <div className='cartile__bottom__license__number'>{number}</div>
                    </div>
                </div>
                <div className='cartile__bottom__subtext'><p>{info}</p></div>
                    
            </div>      
        </div>
    )
};


export default CarTile;
