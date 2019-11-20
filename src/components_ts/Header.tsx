import * as React from 'react';
import './../stylesheets_ts/Header.css';
import logo from '../images/Logo.png';

export default function Header (props: {}) {
    return (
        <div className="logo-box">
           <img src={logo} alt="logo" />
        </div>
    )
}