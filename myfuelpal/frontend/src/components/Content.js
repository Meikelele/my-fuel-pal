import React from 'react';
import './styles/content.css';

import {Link} from "react-router-dom";

const Content = ({header, subtext, link, buttonName}) => {
    return (
        <div className='content'>
            <div className='header_button'>
                <h2 className='header'>{header}</h2>
                <Link to={link}>
                    <div className='button'>{buttonName}</div> 
                </Link>
            </div>
            <p className='subtext'>{subtext}</p>
        </div>
    );
}

export default Content;