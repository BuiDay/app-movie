import * as Type from '../types'

const reducerMoviesInitalState = {
    NetflixOriginals:null,
    Trending:null,
    TopRate:null,
    Action:null,
    Comedy:null,
    Horror:null,
    Romance:null,
    Documentaries:null,
    MovieDetail:null,
    SearchMovies:null,
    AllMovies:null
}
const reducerMovies = (state = reducerMoviesInitalState, action)=>{
    const {type, payload} = action

    switch(type){

        case Type.GET_NETFLIX_ORIGINALS:
            return {...state, NetflixOriginals:payload}
        
        case Type.GET_TRENDING_MOVIES:
            return {...state, Trending:payload}
        case Type.GET_TOP_RATE_MOVIES:
            return {...state, TopRate:payload}
        case Type.GET_ACTION_MOVIES:
            return {...state, Action:payload}
        case Type.GET_COMEDY_MOVIES:
            return {...state, Comedy:payload}
        case Type.GET_HORROR_MOVIES:
            return {...state, Horror:payload}
        case Type.GET_ROMANCE_MOVIES:
            return {...state, Romance:payload}
        case Type.GET_DOCUMENTARIES:
            return {...state, Documentaries:payload}
        case Type.GET_MOVIE_DETAIL:
            return {...state, MovieDetail:payload}
        case Type.GET_SEARCH_MOVIES:
            return {...state, SearchMovies:payload}
        case Type.GET_MOVIES:
            return {...state, AllMovies:payload} 
    
            default:
            return state;
    }
} 

export default reducerMovies;