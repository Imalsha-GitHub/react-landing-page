//Home.jsx

import React, { useState, useEffect } from "react";
import Same from './Same';
import homeimg from '../Images/Home.jpg';
import '../Css/HomeAbout.css';

const Home = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [userName, setUserName] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [showWelcome, setShowWelcome] = useState(false); // State to control showing welcome message

    const handleInputChange = (event) => {
        setUserName(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (userName.trim() !== '') {
            setWelcomeMessage(`Welcome, ${userName}!`);
            setShowWelcome(true); // Show welcome message after setting it
        } else {
            setWelcomeMessage('Welcome!');
            setShowWelcome(false); // Hide welcome message if no name entered
        }
        setUserName(''); // Clear input field after submission
    };

    useEffect (() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval);
    }, []);

    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const currentTime = new Date().getHours();
        if (currentTime >= 5 && currentTime < 12) {
          setGreeting('Good Morning');
        } else if (currentTime >= 12 && currentTime < 18) {
          setGreeting('Good Afternoon');
        } else {
          setGreeting('Good Evening');
        }
    }, []);

    return ( 
        <div>
            {showWelcome && <h1>{welcomeMessage}</h1>}
            <h2 style={{ textAlign: 'center' }}>{greeting}!</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={handleInputChange}
                    className="input-field"
                />
                <button className="home-submit" type="submit">Submit</button>
            </form>
            <Same 
                title="Unlock the transformative power of Industrial AI"
                text="Join us at TechCrunch Unleashed and get ready for AI-driven innovation. See how our AI experience, technology and industry-focus can have an immediate and long-term impact on your business' performance. Be inspired and leave with a plan to transform your business."
                imgsrc={homeimg}
                btn="Read more"
            />
        </div>
    );
}

export default Home;
