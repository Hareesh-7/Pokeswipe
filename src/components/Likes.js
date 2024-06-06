// src/components/Likes.js
import React from 'react';
import '../styles/Likes.css'; // Create a CSS file for likes-specific styles

const Likes = ({ likedPokemon }) => {
    return (
        <div className="likes-container">
            <h2>Your Pokémon Dream Team</h2>
            <div className="liked-pokemon">
                {likedPokemon.map((pokemon, index) => (
                    <div key={index} className="liked-card">
                        <img src={pokemon.image} alt={pokemon.name} />
                        <h3>{pokemon.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Likes;
