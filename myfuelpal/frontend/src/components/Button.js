import React from 'react';
import './styles/button.css';

const Button = ({ text }) => {
    let className = "button";

    if (text === "Login") {
        className = "button__login";
    } else if (text === "Connect with Facebook") {
        className = "button__facebook";
    } else if (text === "SignUp") {
        className = "button__signup";
    }

    return <button className={className}>{text}</button>;
}

export default Button;
