import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { SmoothScrolling } from '../Utils'
import { useViewport } from "../hooks";
import './Contents.css'
import { useDispatch } from "react-redux";
import {getMovieDetail} from '../store/actions'



const MovieRow = (props) => {
    const { movies, title, isNetflix, idSection } = props;
    const [windowWidth] = useViewport();
    const sliderRef = useRef();
    const movieRef = useRef();
    const dispatch = useDispatch();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);

    const handleSetMovie = (movie) =>{
        dispatch(getMovieDetail(movie));
    }


    const handScrollRight = () => {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft) {
            SmoothScrolling(sliderRef.current, 250, movieRef.current.clientWidth * 2, sliderRef.current.scrollLeft);
        }
    }

    const handScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0) {
            SmoothScrolling(sliderRef.current, 250, -movieRef.current.clientWidth * 2, sliderRef.current.scrollLeft);
        };
    }

    useEffect(()=>{
        if(isDrag){
            if(dragMove < dragDown) handScrollRight();
            if(dragMove > dragDown) handScrollLeft();
        }
    },[dragDown, dragMove, isDrag])

    const onDragStart = (e)=>{
        setIsDrag(true);
        setDragDown(e.screenX);
    }
    const onDragEnd = (e)=>{
        setIsDrag(false);
    }
    const onDragEnter = (e)=>{
        setDragMove(e.screenX);
    }

    return (
        <div className="container" draggable='false' id={idSection}>
            <h1 className="title">{title}</h1>
            <div className="movieSlider" id="Slider" ref={sliderRef}
                draggable='true'
                onDragStart = {onDragStart}
                onDragEnd = {onDragEnd}
                onDragEnter = {onDragEnter}
                style={
                    movies && movies.length > 0
                        ? { girdTemplateColumns: `repeat(${movies.length},
                    ${windowWidth > 1200 ? '360px'
                    : windowWidth > 992 ? '300px'
                    : windowWidth > 768 ? '250px' : '200px'})`} : {}
                }
            >
                {movies && movies.length > 0 && movies.map((movie, index) => {
                    if (movie.poster_path && movie.backdrop_path !== null) {
                        let imageUrl = isNetflix
                            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                            : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                        return (
                            <div className="movieItem" draggable='false'  key={index} ref={movieRef} onClick={()=>{handleSetMovie(movie)}}>
                                <img
                                draggable='false'
                                    className="moviePoster"
                                    src={imageUrl}
                                    alt=""
                                />
                                <div className="movieName">{movie.title || movie.name}</div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className={`btn btnPrev ${isNetflix && 'isNetflix'}`} onClick={() => handScrollLeft()}>
                <AiOutlineLeft />
            </div>
            <div className={`btn btnNext ${isNetflix && 'isNetflix'}`} onClick={() => handScrollRight()}>
                <AiOutlineRight />
            </div>
        </div>
    );
};

export default MovieRow;
