import React, { useEffect } from 'react';
import MovieRow from './MovieRow';
import { useDispatch, useSelector } from 'react-redux';
import * as ACTIONS from '../store/actions'


const Contents = () => {
    const dispatch = useDispatch();
    const {NetflixOriginals,Trending,TopRate,Action,Comedy,Horror,Romance,Documentaries } = useSelector(state=>state.infoMovies);

    useEffect (()=>{
        dispatch(ACTIONS.getNetflixOriginals())
        dispatch(ACTIONS.getTrendingMovies())
        dispatch(ACTIONS.getTopRateMovies())
        dispatch(ACTIONS.getActionMovies())
        dispatch(ACTIONS.getComedyMovies())
        dispatch(ACTIONS.getHorrorMovies())
        dispatch(ACTIONS.getRomanceMovies())
        dispatch(ACTIONS.getDocumentaries())
    },[dispatch])
    
    return (
        <>
            <MovieRow movies={NetflixOriginals} title="Netflix Originals" isNetflix={true} idSection='NetflixOriginals'/>
            <MovieRow movies={Trending} title="Trending Movies" idSection='Trending'/>
            <MovieRow movies={TopRate} title="Top Rated Movies" idSection='TopRate'/>
            <MovieRow movies={Action} title="Action Movies" idSection='Action'/>
            <MovieRow movies={Comedy} title="Comedy Movies" idSection='Comedy'/>
            <MovieRow movies={Horror} title="Horror Movies" idSection='Horror'/>
            <MovieRow movies={Romance} title="Romance Movies" idSection='Romance'/>
            <MovieRow movies={Documentaries} title="Documentaries" idSection='Documentaries'/>
        </>
    );
};

export default Contents;