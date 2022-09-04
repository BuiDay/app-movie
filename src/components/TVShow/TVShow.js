import React from 'react';
import { useViewport } from "../hooks";
import { useDispatch} from 'react-redux';
import style from './TVShowStyle.module.scss'
import {getMovieDetail } from '../store/actions';

const TVShow = (props) => {

    const dispatch = useDispatch();
    const handleSetMovie = (movie) =>{
        dispatch(getMovieDetail(movie));
    }

    const [windowWidth] = useViewport();
    const {AllMovies} = props
   
    return (
        <div className={style.moviesPane}>
            <h3>TV Show</h3>
                    <div className={style.searchContent}
                        style={{
                            gridTemplateColumns: `repeat(${windowWidth > 1200 ? 5 :
                                    windowWidth > 992 ? 4 :
                                        windowWidth > 768 ? 3 :
                                            windowWidth > 600 ? 2 : 1
                                },auto)`
                        }}
                    >{ AllMovies &&
                            AllMovies.map((movie, index) => {
                                if(movie.backdrop_path !== null && movie.media_type !== 'person'){
                                    const url = `https://image.tmdb.org/t/p/w500/${ movie.backdrop_path}`
                                    return(
                                        < div className={style.movieItem} key={index} onClick={()=>handleSetMovie(movie)}>
                                        <img src= {url} alt="" />
                                        <span>{movie.title||movie.name}</span>
                                </div>
                                    )
                                }
                            })
                        }
                    </div>
               
        </div>
    );
};

export default TVShow;

