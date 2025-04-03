import React, { useState, useEffect } from 'react';
import "../styles/style.css";
import "../styles/style-destinations.css";
import "../styles/style-favorites.css";
import { Link } from "react-router-dom";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    return (
        <div>
            <div className="banner">
                <header>
                    <img className="logo" src="/img/logo1.png" alt="Logo" />

                    <ul className="nav-link">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/favorites">Favorite</Link></li>
                    </ul>
                </header>

                <div className="title">
                    <h2 className="banner-text">Your favorite destinations.</h2>
                    <h1 className="baner-text">Favorites</h1>
                </div>
            </div>

            <hr />


            <div className='favoritepg'>
                <div className="favorite-gallery">
                    {favorites.length > 0 ? (
                        <div className="destination-table">
                            {favorites.map((item, index) => (
                                <div className="pc" key={index}>
                                    <img src={item.src} alt={item.title || `img-${index}`} />
                                    <h2>{item.title || ""}</h2>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>You have nothing added to favorites.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Favorites;