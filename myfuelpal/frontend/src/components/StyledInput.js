import React from 'react';
import './styles/styledinput.css';

const StyledInput = ({ type, text }) => <input type={type} className='inpucik' placeholder={text} />;


export default StyledInput;