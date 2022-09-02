import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { getMovieDetail } from '../store/actions'
import moment from 'moment'
import { BsPlayFill } from 'react-icons/bs'
import { BiPlus } from 'react-icons/bi'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'

const MoviesDetail = (props) => {
    const { movie, showModal } = props;
    const [isLike, setIsLike] = useState(true);
    const [isDislike, setIsDislike] = useState(false);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        dispatch(getMovieDetail(null));
    }

    const handleLike = () => {
        if (isDislike === true) {
            setIsDislike(false);
        }
        setIsLike(!isLike);
    }

    const handleDisLike = () => {
        if (isLike === true) {
            setIsLike(false);
        }
        setIsDislike(!isDislike);
    }

    return (
        <Modal>
            <div className={`backdrop ${showModal ? "showBackdrop" : "hideBackdrop"}`}
                onClick={handleCloseModal}
            ></div>
            <div className={`modal ${showModal ? "showModal" : "hideModal"}`}
                style={movie ? {
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path})`,
                    backgroundSize: 'cover'
                } : {}}
            >
                <div className="container">
                    <div className="movieInfo">
                        <h1 className="movieTitle">{movie && (movie.title || movie.name)}</h1>
                        <p className="statistical">
                            <span className="rating">Rating:{movie && movie.vote_average * 10}</span>
                            <span className="popularity">Popularity:{movie && movie.popularity}</span>
                        </p>
                        <p className="releaseDate">Release Date:{movie && (
                            moment(movie.release_date).format('DD/MM/YYYY') ||
                            moment(movie.first_air_date).format('DD/MM/YYYY')
                        )}</p>
                        <p className="overview">{movie && movie.overview}</p>
                        <div className='btn__container'>
                            <div className="btnPlay">
                                <BsPlayFill />
                                <span>PLAY</span>
                            </div>
                            <div className="btnMyList">
                                <BiPlus />
                                <span>MY LIST</span>
                            </div>
                            <div className={`iconLike ${isLike ? "showLike" : ''}`} onClick={handleLike}> <AiOutlineLike /> </div>
                            <div className={`iconDislike ${isDislike ? "showDislike" : ''}`} onClick={handleDisLike}> <AiOutlineDislike /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default MoviesDetail;

const fadeIn = keyframes`
    0%:{background:rgba(0,0,0,0)}
    100%:{background:rgba(0,0,0,0.6)}
`;

const Modal = styled.div`
    .backdrop{
        position:fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        z-index:2000;
        background-color:rgba(0,0,0,0.6);
        animation:${fadeIn} 1s cubic-bezier(0.17,0.85,0.45,1) forwards;
        
    }

    .showBackdrop{
        display:block;
    }

    .hideBackdrop{
        display:none;
    }

    .modal {
        position:fixed;
        top:25%;
        z-index:3000;
        height:80%;
        width:100%;
        margin:0 auto;
        color: var(--color-white);
        box-shadow 0 15px 40px rgba(var(--color-dark),0.2);
        transition: all 0.3s ease;
        
        @media screen and (max-width:1184px){
            height:70%;
        }
        @media screen and (max-width:600px){
            height:80%;
        }
    }
    
    .container {
        user-select:none;
        position:relative;
        width:70%;
        height:100%;
        background: linear-gradient(90deg, rgba(0,0,0,0.94) 60%, transparent);
    
            @media screen and (max-width:1184px){
            background: linear-gradient(90deg, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.773), transparent);
            width:88%;
             } 

            @media screen and (max-width:1184px){
            background: linear-gradient(90deg, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.95), transparent);
            width:100%;
            } 

            .movieInfo{
                width:65%;
                height:100%;
                padding-left:24px;
                color:var(--color-white);
                font-size:20px;
                padding-top:20px;

                .movieTitle{
                    margin-top:30px;
                }

                .statistical{
                    margin-top:20px;
                    display:flex;

                    .rating{
                    color:var(--color-green);
                    }

                    .popularity{
                        color:yellow;
                        margin-left:12px;
                    }
                
            }

            .releaseDate{
                margin-top:12px;
            }

            .overview {
                margin-top:20px;
                color:rgba(255,255,255,0.6);
                line-height:1.4;
                font-size:18px;
            }
        .btn__container{
            margin-top:10px;
            display:flex;   
            width:100%;
            height:40px;
            
                .btnPlay{
                    background-color: rgb(212, 19, 19);
                    color:white;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100%;
                    width:120px;
                    font-size:18px;
                    font-weight:bold;
                    padding-right:5px;
                    cursor:pointer;

                    svg{
                        font-size:35px;
                    }
                }

                .btnMyList{
                    padding-right:5px;
                    margin:0 10px;
                    border:1px solid white;
                    color:white;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100%;
                    width:120px;
                    font-size:18px;
                    font-weight:bold;
                    cursor:pointer;

                    svg{
                        font-size:35px;
                    }
                }

                .iconLike{
                    height:100%;
                    width:40px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border:1px solid white;
                    border-radius:50%;
                    margin:0 5px;
                    font-size:25px;
                    cursor:pointer;
                }

                .iconDislike{
                    height:100%;
                    width:40px;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    border:1px solid white;
                    border-radius:50%;
                    margin:0 5px;
                    font-size:25px;
                    cursor:pointer;
                }
            }
        }
    }
}
    .showModal{
        top:15%;
        opacity:1;
        left:0;
        visibility: visible;
        transition: 0.3s ease-in-out;
    }

    .hideModal{
        top:0;
        opacity:0;
        visibility: hidden;
        transition: 0.3s ease-in-out;
    }
    
    .showLike {
        background:green;
    }

    .showDislike {
        background:red;
    }

`;
