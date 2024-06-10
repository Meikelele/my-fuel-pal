import React from 'react';
import './styles/cartile.css';

import Auto from '../images/auto_test_3.jpg';

const CarTile = ( props ) => {
    return (
        <div className='cartile'>
            <div className='cartile__image'>
                <img src={Auto} alt='auto'></img>
            </div>
            <div className='cartile__bottom'>
                <div className='cartile__bottom__bar'>
                    <h2>{props.nickname}</h2>
                    <div className='cartile__bottom__license'>
                        <div className='cartile__bottom__license__country'>{props.country}</div>
                        <div className='cartile__bottom__license__number'>{props.number}</div>
                    </div>
                </div>
                <div className='cartile__bottom__subtext'><p>{props.brand} {props.model} {props.engine} {props.fuel} {props.mileage} KM</p></div>
                <div className='cartile__bottom__subtext'><p>{props.desc}</p></div>
                    
            </div>      
        </div>
    )
};


export default CarTile;
