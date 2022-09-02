import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './PaginationsStyle.module.scss'

const Paginations = () => {
    const navigate = useNavigate();


    useEffect(() => {
        const arry = document.querySelectorAll("a");
        arry.forEach((a) => {
            a.onclick = () => {
                arry.forEach(x=>{
                    if(x.className.includes('active')){
                        x.classList.remove(style.active);
                    }
                })
                a.classList.add(style.active);
                console.log(a.innerText)
                navigate(`/${a.innerText}`)
            }
        }
        )
    })  



        return (

            <div className={style.pagination_section}>
                <a href="#" > Previous</a>
                <a href="#" >1</a>
                <a href="#" >2</a>
                <a href="#" >3</a>
                <a href="#" >4</a>
                <a href="#" >5</a>
                <a href="#" > Next </a>
            </div>
        );
    }

    export default Paginations;