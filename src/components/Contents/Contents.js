import React, { useState, useEffect,useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './Contents.css'

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5bab6487d88e5976c31c88431f1a4058&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const Contents = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(0);

    const handScrollRight = (x) =>{
        var slider = document.getElementById("Slider");
        slider.scrollLeft = slider.scrollLeft + x;
    }

    const handScrollLeft = (x) =>{
        var slider = document.getElementById("Slider");
        slider.scrollLeft = slider.scrollLeft - x;
    }

    useEffect(()=>{
        if(isDrag){
            if(dragMove < dragDown) handScrollRight(600);
            if(dragMove > dragDown) handScrollLeft(600);
        }
    },[dragDown,dragMove,isDrag])

    const onDragStart = e =>{
        setIsDrag(true);
        setDragDown(e.screenX);
    }

    const onDragEnd  = e =>{
        setIsDrag(false);
    }

    const onDragEnter = e =>{
        setDragMove(e.screenX);
    }

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
        <div className="container">
            <h1 className="title">Netflix Originals</h1>
            <div className="movieSlider" 
                 id="Slider"
                 onDragStart = {onDragStart}
                 onDragEnd = {onDragEnd}
                 onDragEnter = {onDragEnter}
            >

                {movies.map((movie) => {
                    const { poster_path, id, original_title, overview, vote_average } = movie;
                    return (
                        <div className="movieItem" key={id} >
                            <img className="moviePoster" src={IMG_PATH + poster_path} alt="" />
                            <div className="movieName">{original_title}</div>
                        </div>
                    )
                })}

            </div>
                <div className="btn btnPrev" onClick={() => handScrollLeft(500)}><AiOutlineLeft /></div>
                <div className="btn btnNext" onClick={() => handScrollRight(500)}><AiOutlineRight /></div>
            </div>
    );
};

export default Contents;
