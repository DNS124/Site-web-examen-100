import React from 'react'
import "../styles/style.css";
import "../styles/style-destinations.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="banner">
                <header>
                    <img className="logo" id="top" src="/img/logo1.png" alt="Logo" />
                    <ul className="nav-link">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/destinations">Destinations</Link></li>
                        <li><Link to="/favorites">Favorite</Link></li>
                    </ul>
                </header>


                <div className="title">
                    <h2 className="banner-text">Discover the world's most breathtaking destinations.</h2>
                    <h1 className="baner-text">Your dream vacation starts here.</h1>
                    <a href="#map">Go to MAP</a>
                </div>
            </div>

            <hr />

            <div className="about">
                <p>
                    At TravelVista, we're passionate about creating unforgettable travel experiences.
                    With over 15 years in the industry, our team of expert travel consultants has
                    helped thousands of clients discover hidden gems and popular hotspots around the globe.
                    We specialize in personalized itineraries that match your travel style, whether you're
                    seeking adventure, relaxation, or cultural immersion.
                </p>
            </div>

            <div className="best-destinations">
                <h2>Top Travel Destinations for 2025</h2>
                <p>
                    These are the places that captured travelers' hearts this year, offering unique
                    experiences, stunning landscapes, and rich cultural heritage.
                </p>

                <div className="dest-img">
                    {[
                        { img: "pb12.jpg", title: "Egypt" },
                        { img: "pb11.jpg", title: "Turkey" },
                        { img: "pb62.jpg", title: "Greece" },
                        { img: "pb22.jpg", title: "Thailand" },
                        { img: "pb31.jpg", title: "Bulgaria" },
                        { img: "pb42.jpg", title: "Dubai" },
                    ].map((dest, index) => (
                        <div className="dist" key={index}>
                            <img src={`/img/${dest.img}`} alt={dest.title} />
                            <h2 className="dit">{dest.title}</h2>
                            <p>
                                {dest.title === "Egypt" && "Explore ancient pyramids and cruise the Nile"}
                                {dest.title === "Turkey" && "Where East meets West in Istanbul's bazaars"}
                                {dest.title === "Greece" && "Whitewashed villages and azure waters"}
                                {dest.title === "Thailand" && "Golden temples and tropical beaches"}
                                {dest.title === "Bulgaria" && "Affordable skiing and Black Sea resorts"}
                                {dest.title === "Dubai" && "Futuristic architecture and desert adventures"}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div id="map">
                <div style={{ width: "100%" }}>
                    <iframe
                        title="Google Map"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Romania+(My%20Business%20Name)&amp;t=k&amp;z=5&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                </div>
            </div>

            <div className="gallery">
                <div className="gallery-text">
                    <h2>
                        Travel Inspiration From Around The World.
                        Wanderlust-Worthy Moments: Discover Earth's Most Jaw-Dropping Destinations.
                        Experience the World Through the Eyes of Those Who've Been There.
                    </h2>
                    <p>
                        Our photo gallery showcases stunning destinations that will fuel your wanderlust.
                        From tropical beaches to mountain retreats, ancient cities to modern metropolises -
                        each image tells a story waiting for you to experience firsthand.
                    </p>
                </div>

                <div className="gallery-table">
                    {["can", "corfu", "symi", "valencia", "ruka", "kotor"].map(
                        (name, index) => (
                            <div className="gt" key={index}>
                                <img src={`/img/${name}.jpg`} alt={name} />
                            </div>
                        )
                    )}
                </div>
            </div>

            <footer>
                <div className="bgim">
                    <div className="footer-container">
                        <a href="#top">TravelVista</a>
                        <p>
                            Start planning your next adventure today. Contact our travel specialists
                            for personalized recommendations and exclusive deals.
                        </p>
                    </div>

                    <div className="footer-container1">
                        <p>
                            Follow us on social media for travel tips, destination highlights,
                            and special offers throughout the year.
                        </p>

                        <div className="sp">
                            <a className="button1" href="https://www.instagram.com/">
                                <i className="fa-brands fa-square-instagram" style={{ color: "#f00078" }}></i>
                            </a>

                            <a className="button1" href="https://www.facebook.com/">
                                <i className="fa-brands fa-facebook" style={{ color: "#006ca1" }}></i>
                            </a>

                            <a className="button1" href="https://twitter.com/">
                                <i className="fa-brands fa-twitter" style={{ color: "#0080c0" }}></i>
                            </a>

                            <a className="button1" href="https://www.youtube.com/">
                                <i className="fa-brands fa-youtube" style={{ color: "#ff0000" }}></i>
                            </a>

                            <a className="button1" href="https://mail.google.com">
                                <i className="fa-regular fa-envelope" style={{ color: "#000000" }}></i>
                            </a>
                        </div>
                    </div>
                </div>
                <p className='tag'>@Denis DNS 2025</p>
            </footer>
        </>
    );
};

export default Home;