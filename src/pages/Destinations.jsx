import React, { useState, useEffect } from "react";
import "../styles/style.css";
import "../styles/style-destinations.css";
import { Link } from "react-router-dom";

const Destinations = () => {
    const savedFavorites = localStorage.getItem("favorites");
    const intialState = savedFavorites ? JSON.parse(savedFavorites) : [];
    const [favorites, setFavorites] = useState(intialState);

    const toggleFavorite = (index, item) => {
        const isFavorite =
            favorites && favorites.some((fav) => fav.src === item.src);

        const updatedFavorites = isFavorite
            ? favorites.filter((fav) => fav.src !== item.src)
            : [...favorites, item];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
    };

    const destinations = [
        { src: "/img/b1.jpg", title: "Caribbean Beach" },
        { src: "/img/azore.jpg", title: "Azores Beach", id: "photo" },
        { src: "/img/b3.jpg", title: "Maldives Shore" },
        { src: "/img/background-image.jpg", title: "Seychelles Coast" },
        { src: "/img/background-image1.jpg", title: "Bora Bora" },
        { src: "/img/background-image2.jpg", title: "Santorini" },

        { src: "/img/can.jpg", title: "Cancún White Sands" },
        { src: "/img/corfu.jpg", title: "Corfu Beach" },
        { src: "/img/symi.jpg", title: "Symi Crystal Bay" },
        { src: "/img/valencia.jpg", title: "Valencia Shore" },
        { src: "/img/ruka.jpg", title: "Ruka" },
        { src: "/img/kotor.jpg", title: "Kotor Bay Lake" },

        { src: "/img/background-image3.jpg", title: "Mauritius Beach" },
        { src: "/img/bali.jpg", title: "Bali" },
        { src: "/img/capri.jpg", title: "Capri" },
        { src: "/img/DR.jpg", title: "Punta Cana Beach" },
        { src: "/img/flo.jpg", title: "Florida Keys" },
        { src: "/img/haw.jpg", title: "Hawaiian Shore" },

        { src: "/img/lv.jpg", title: "Las Vegas" },
        { src: "/img/mon.jpg", title: "Monaco Riviera" },
        { src: "/img/rm.jpg", title: "Amalfi Coast" },
        { src: "/img/rovinj.jpg", title: "Croatian Riviera" },
        { src: "/img/sl.jpg", title: "Dominican Republic" },
        { src: "/img/symi.jpg", title: "Symi Harbor Beach" },

        { src: "/img/tenerife.jpg", title: "Tenerife Black Sand Beach" },
        { src: "/img/mon.jpg", title: "Monaco Riviera" },
        { src: "/img/rm.jpg", title: "Amalfi Coast" },
        { src: "/img/rovinj.jpg", title: "Croatian Riviera" },
        { src: "/img/sl.jpg", title: "Dominican Republic" },
        { src: "/img/symi.jpg", title: "Symi Harbor Beach" },
    ];

    console.log(favorites);

    return (
        <div>
            <div className="banner">
                <header>
                    <img className="logo" src="/img/logo1.png" alt="Logo" />

                    <ul className="nav-link">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/destinations">Destinations</Link>
                        </li>
                        <li>
                            <Link to="/favorites">Favorite</Link>
                        </li>
                    </ul>
                </header>

                <div className="title">
                    <h2 className="banner-text">Our beautiful collection of photos.</h2>
                    <h1 className="baner-text">Gallery</h1>
                    <a href="#photo">Go to Gallery</a>
                </div>
            </div>

            <hr />

            <div className="destination">
                <div className="destination-table">
                    {destinations.map((item, index) => (
                        <div className="pc" key={index} id={item.id || null}>
                            <img src={item.src} alt={item.title || `img-${index}`} />
                            <h2>{item.title || ""}</h2>
                            <button
                                onClick={() => toggleFavorite(index, item)}
                                className="favorite-button"
                            >
                                {favorites && favorites.some((fav) => fav.src === item.src)
                                    ? "Remove from Favorites"
                                    : "Add to Favorites"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations;