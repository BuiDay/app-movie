import React, { useState } from "react";
import Movies from "../Movies/Movies";
import Paginations from "../Paginations/Paginations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMovies } from "../store/actions";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MoviesDetail from '../MoviesDetail/MoviesDetail';

const AllMovies = () => {

  const x = useParams();
  const { AllMovies } = useSelector((state) => state.infoMovies);
  const {MovieDetail} = useSelector (state => state.infoMovies)
  const dispatch = useDispatch();
  const url = '/movies/page/'

  useEffect(() => {
    if (x.index !== null){
        dispatch(getMovies(x.index));
    }
    
  }, [dispatch,x.index]);
  
  return (
    <>
      <Movies AllMovies = {AllMovies}/>
      <Paginations url={url}/>
      <MoviesDetail movie={MovieDetail} showModal ={ MovieDetail ? true : false}  />
    </>
  );
};

export default AllMovies;
