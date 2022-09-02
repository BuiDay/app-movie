import React from 'react';
import { useViewport } from "../hooks";
import { useDispatch} from 'react-redux';
import { useEffect} from 'react';
import { getMovies } from '../store/actions';
import style from './MoviesStyle.module.scss'
import { useSelector } from 'react-redux';

const Movies = (props) => {
    
    const [windowWidth] = useViewport();
    const dispatch = useDispatch();
    const { AllMovies } = useSelector(state => state.infoMovies)

    // const handleSetMovies = (movie) =>{
    //     dispatch(getMovieDetail(movie));
    // }


    useEffect(() => {
            dispatch(getMovies(1));
    }, [dispatch])

    console.log(AllMovies)

    
    return (
        <div className={style.moviesPane}>
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
                                        < div className={style.movieItem} key={index}>
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

export default Movies;

