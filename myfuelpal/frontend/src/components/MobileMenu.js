import React from 'react';
import './styles/mobileMenu.css';
import { Link } from 'react-router-dom';

import { GoHomeFill } from "react-icons/go";
import { FaCar } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";

import { FaGasPump } from "react-icons/fa6";



const MobileMenu = () => {

    

    return (
        <div className='mobileMenu'>
            

            <div className='mobileMenu__tile'>
                <Link to='/mycars'>
                    <FaCar className='icon'/>
                </Link>
            </div>

            <div className='mobileMenu__tile'>
                <Link to='/myfuelpal'>
                    <FaGasPump className='icon'/>
                </Link>
            </div>

            <div className='mobileMenu__tile'>
                <Link to='/home'>
                    <GoHomeFill className='icon'/>
                </Link>
            </div>
            
            <div className='mobileMenu__tile'>
                <Link to='/profile'>
                <BsPersonCircle className='icon'/>
                </Link>
            </div>
            

            <div className='mobileMenu__tile'>
                <Link to='/settings'>
                    <IoMdSettings className='icon'/>
                </Link>
            </div>
        </div>
    );
}

export default MobileMenu;
