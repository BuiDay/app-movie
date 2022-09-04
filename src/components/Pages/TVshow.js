import React, { useState } from "react";
import TVShow from "../TVShow/TVShow";
import Paginations from "../Paginations/Paginations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTVshow } from "../store/actions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MoviesDetail from '../MoviesDetail/MoviesDetail';

const TVshow = () => {

  const x = useParams();
  const { TVSHOW } = useSelector((state) => state.infoMovies);
  const {MovieDetail} = useSelector (state => state.infoMovies)
  const dispatch = useDispatch();
  const url = '/tvshow/page/'

  useEffect(() => {
    if (x.index !== null){
        dispatch(getTVshow(x.index));
    }
    
  }, [dispatch,x.index]);
  
  return (
    <>
      <TVShow AllMovies = {TVSHOW} />
      <Paginations url={url}/>
      <MoviesDetail movie={MovieDetail} showModal ={ MovieDetail ? true : false}  />
    </>
  );
};

export default TVshow ;
