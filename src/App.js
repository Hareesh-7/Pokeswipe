// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Likes from './components/Likes';
import './styles/App.css';
import './styles/DarkMode.css';

const App = () => {
    const [likedPokemon, setLikedPokemon] = useState([]);
    const [darkMode, setDarkMode] = useState(false);
    const [showLiked, setShowLiked] = useState(false);

    const handleLike = (pokemon) => {
        setLikedPokemon([...likedPokemon, pokemon]);
    };

    const handleDislike = (pokemon) => {
        // Implement any specific actions on dislike if necessary
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const viewLikedPokemon = () => {
        setShowLiked(true);
    };

    const goBackToCarousel = () => {
        setShowLiked(false);
    };

    return (
        <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
            <Header likesCount={likedPokemon.length} toggleDarkMode={toggleDarkMode} viewLikedPokemon={viewLikedPokemon} />
            {showLiked ? (
                <div>
                    <button onClick={goBackToCarousel}>Back to Swiping</button>
                    <Likes likedPokemon={likedPokemon} />
                </div>
            ) : (
                <Carousel onLike={handleLike} onDislike={handleDislike} />
            )}
        </div>
    );
};

export default App;
