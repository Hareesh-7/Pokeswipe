// src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Carousel.css';
import Card from './CardComponent';

const Carousel = ({ onLike, onDislike }) => {
    const [pokemon, setPokemon] = useState(null);
    const [history, setHistory] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [likedPokemons, setLikedPokemons] = useState({});

    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        try {
            const id = Math.floor(Math.random() * 898) + 1;
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = response.data;
            const newPokemon = {
                name: data.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
                abilities: data.abilities.map(ability => ability.ability.name),
                types: data.types.map(type => type.type.name)
            };
            setHistory(prevHistory => [...prevHistory, newPokemon]);
            setPokemon(newPokemon);
        } catch (error) {
            console.error("Error fetching Pokémon:", error);
        }
    };

    const handleLike = () => {
        onLike(history[currentIndex]);
        setLikedPokemons(prevState => ({
            ...prevState,
            [history[currentIndex].name]: true
        }));
        handleNext();
    };

    const handleDislike = () => {
        onDislike(history[currentIndex]);
        setLikedPokemons(prevState => ({
            ...prevState,
            [history[currentIndex].name]: false
        }));
        handleNext();
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setPokemon(history[currentIndex - 1]);
        }
    };

    const handleNext = () => {
        if (currentIndex < history.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setPokemon(history[currentIndex + 1]);
        } else {
            fetchPokemon();
        }
    };

    useEffect(() => {
        if (currentIndex < history.length) {
            setPokemon(history[currentIndex]);
        }
    }, [currentIndex, history]);

    return (
        <div className="carousel">
            {pokemon && (
                <Card
                    pokemon={pokemon}
                    onLike={handleLike}
                    onDislike={handleDislike}
                    isLiked={likedPokemons[pokemon.name]}
                />
            )}
            <div className="navigation">
                <button onClick={handlePrevious} disabled={currentIndex <= 0}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    );
};

export default Carousel;
