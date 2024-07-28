//List.js
import React, { useState, useEffect } from "react";
import logo from '../Images/logo3.png';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import '../Css/ListStyle.css';

const List = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    

    return (
        <>
            <header>
                <div className="container container-flex">
                    <div className="logoContainer">
                        <img src={logo} alt="logo" className="logo" />
                    </div>

                    <nav>
                        <div className="list">
                            <NavLink to="/" className={({ isActive }) => isActive ? "listItem activeItem" : "listItem"}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "listItem activeItem" : "listItem"}>About</NavLink>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "listItem activeItem" : "listItem"}>Contact</NavLink>
                            <NavLink to="/services" className={({ isActive }) => isActive ? "listItem activeItem" : "listItem"}>Services</NavLink>
                        </div>
                    </nav>

                    <div className="icons">
                        <SearchIcon className="icon" />
                        <PersonIcon className="icon" />
                        <CallIcon className="icon" />
                    </div>

                    <div className="nav-time">
                        {currentTime.toLocaleTimeString('en-US', { timeZone: 'Asia/Colombo', hour12: true })}
                    </div>
                </div>
            </header>
        </>
    );
}

export default List;
