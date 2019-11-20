import * as React from 'react';
import {BrowserRouter as Router, Route, Link, RouteComponentProps} from "react-router-dom";
import './../stylesheets_ts/NavBar.css';
import { User } from '../TypeDefinitions';


interface NavBarProps {
    currentUser: User;
}

export default function NavBar (props: NavBarProps) {
    return (
        <div className="nav-bar">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/search">Search</Link>
            {
                props.currentUser === null
                ? <Link className="link" to="/login">Login / Sign Up</Link>
                : <h2>Hello, {props.currentUser.firstName}!</h2>
            }
        </div>
    )
}