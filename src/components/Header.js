// src/components/Header.js
import React from 'react';

const Header = ({ likesCount, toggleDarkMode, viewLikedPokemon }) => {
    return (
        <header className="header">
            <div className="logo">PokéSwipe</div>
            <div className="controls">
                <button onClick={toggleDarkMode}>Mode</button>
                <button onClick={viewLikedPokemon}>View Liked</button>
                <div className="likes">Likes: {likesCount}</div>
            </div>
        </header>
    );
};

export default Header;
