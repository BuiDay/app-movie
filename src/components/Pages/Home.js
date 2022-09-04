import React, { useEffect, useState } from 'react';
import Intro from '../Intro/Intro';
import Contents from '../Contents/Contents';
import Menus from '../Menus/Menus';
import MoviesDetail from '../MoviesDetail/MoviesDetail';
import Footer from '../../components/footer/Footer'
import {useSelector} from 'react-redux'

const Home = () => {
    const {MovieDetail} = useSelector(state => state.infoMovies)
    const [isShow, setIsShow] = useState(false);

    useEffect(()=>{
        setIsShow(MovieDetail ? true : false);
    },[MovieDetail])
    return (
        <div>
            <Intro />
            <Contents />
            <MoviesDetail movie={MovieDetail} showModal={isShow} />
            <Menus />
            <Footer />
        </div>
    );
};

export default Home;