// src/components/Card.js
import React from 'react';
import '../styles/Card.css';
import { FaHeart } from 'react-icons/fa';

const Card = ({ pokemon, onLike, onDislike, isLiked }) => {
    return (
        <div className="card">
            <div className="image-container">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="info-container">
                <h2 className="pokemon-name">
                    {pokemon.name}
                    <FaHeart className={`heart-icon ${isLiked ? 'liked' : 'disliked'}`} />
                </h2>
                <div className="pokemon-abilities">
                    <strong>Abilities:</strong>
                    <div className="abilities-list">
                        {pokemon.abilities.map((ability, index) => (
                            <div key={index} className="ability-box">
                                {ability}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="pokemon-types">
                    <strong>Types:</strong>
                    <div className="types-list">
                        {pokemon.types.map((type, index) => (
                            <div key={index} className="type-box">
                                {type}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button onClick={onDislike} className="dislike-button">Dislike</button>
                <button onClick={onLike} className="like-button">Like</button>
            </div>
        </div>
    );
};

export default Card;
