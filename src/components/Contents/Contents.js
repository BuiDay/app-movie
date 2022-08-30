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
            <MovieRow movies={NetflixOriginals} title="Netflix Originals" isNetflix={true}/>
            <MovieRow movies={Trending} title="Trending Movies"/>
            <MovieRow movies={TopRate} title="Top Rated Movies"/>
            <MovieRow movies={Action} title="Action Movies"/>
            <MovieRow movies={Comedy} title="Comedy Movies"/>
            <MovieRow movies={Horror} title="Horror Movies"/>
            <MovieRow movies={Romance} title="Romance Movies"/>
            <MovieRow movies={Documentaries} title="Documentaries"/>
        </>
    );
};

export default Contents;