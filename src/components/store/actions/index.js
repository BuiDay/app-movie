import axios from "axios";
import * as Type from '../types'

const API_KEY = '5bab6487d88e5976c31c88431f1a4058'
const BASE_URL = 'https://api.themoviedb.org/3'

export const getNetflixOriginals = () => async dispatch =>{
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({type:Type.GET_NETFLIX_ORIGINALS,payload: result.data.results})
    }
    catch(err){
        console.log('error',err);
    }
}

export const getTrendingMovies = () => async dispatch =>{
    try{
        const result = await axios.get(
            `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
        );
        dispatch({type:Type.GET_TRENDING_MOVIES,payload: result.data.results})
    }
    catch(err){
        console.log('error',err);
    }
}

export const getTopRateMovies = () => async dispatch =>{
    try{
        const result = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
        );
        dispatch({type:Type.GET_TOP_RATE_MOVIES,payload: result.data.results})
    }
    catch(err){
        console.log('error',err);
    }
}

export const getActionMovies = () => async dispatch =>{
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
        );
        dispatch({type:Type.GET_ACTION_MOVIES,payload: result.data.results})
    }
    catch(err){
        console.log('error',err);
    }
}

export const getComedyMovies = () => async dispatch =>{
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
        );
        dispatch({type:Type.GET_COMEDY_MOVIES,payload: result.data.results})
    }
    catch(err){
        console.log('error',err);
    }
}

export const getHorrorMovies = () => async dispatch =>{
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
        );
        dispatch({type:Type.GET_HORROR_MOVIES,payload: result.data.results})
    }
    catch(err){
        console.log('error',err);
    }
}

export const getRomanceMovies = () => async dispatch =>{
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
        );
        dispatch({type:Type.GET_ROMANCE_MOVIES,payload: result.data.results})
    }
    catch(err){
        console.log('error',err);
    }
}

export const getDocumentaries = () => async dispatch =>{
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
        );
        dispatch({type:Type.GET_DOCUMENTARIES,payload: result.data.results})
    }
    catch(err){
        console.log('error',err);
    }
}

export const getMovieDetail = (movie) => async dispatch =>{
    dispatch({type:Type.GET_MOVIE_DETAIL ,payload: movie})
}

export const getSearchMovies = (keyword) => async dispatch =>{
    try{
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keyword}`
        );
        dispatch({type:Type.GET_SEARCH_MOVIES,payload: result.data.results})
    }
    catch(err){
        console.log('error',err);
    }
}

export const getMovies = (page) => async dispatch =>{
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
        );
        dispatch({type:Type.GET_MOVIES,payload: result.data.results})
    }
    catch(err){
        console.log('error',err);
    }
}