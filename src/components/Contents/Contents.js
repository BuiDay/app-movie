import React, { useState, useEffect } from "react";

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=trending.desc&api_key=5bab6487d88e5976c31c88431f1a4058";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const Contents = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState();

    const fetchAPI = async (URL) => {
        try {
            const response = await fetch(URL);
            const newMovies = await response.json();
            const dataMovies = newMovies.results
            setMovies(dataMovies);
        } catch (err) { }
    };
    useEffect(() => {
        fetchAPI(API_URL);
    }, []);

    return (
        <div>
            <h1>Netflix Originals</h1>
            {movies.map((movie) => {
                const { poster_path, id, original_title, overview, vote_average } = movie;
                return (
                <div>
                    <div>
                        <img src={IMG_PATH + poster_path} alt=""/>
                    </div>    
                </div>
                )
            })}
        </div>
    );
};

export default Contents;
