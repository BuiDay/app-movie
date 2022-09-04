import React from 'react';
import style from '../Navbar/NotificationsStyle.module.scss'
import { MdNotifications } from 'react-icons/md'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';


const Notifications = () => {

    const isShow = useRef();
    const [show, setShow] = useState('');


    const handleShow = (e) =>{
       
        setShow(isShow.current.contains(e.target));
    }
    
    useEffect(()=>{
        if(show){
            document.addEventListener('click',handleShow);
        }
        else{
            document.removeEventListener('click',handleShow);
        }
    })

    
    return (
        <div>
            <div className={style.icon} id='notifi' ref={isShow} onClick={(e)=>{handleShow(e)}}><MdNotifications /></div>
            {
                show ? (
                    <div className={style.notifications__list}>
                        <div className={style.notification}>Lorem ipsum dolor sit amet.</div>
                        <div className={style.notification}>Lorem ipsum dolor sit amet.</div>
                        <div className={style.notification}>Lorem ipsum dolor sit amet.</div>
                        <div className={style.notification}>Lorem ipsum dolor sit amet.</div>
                    </div>
                ) : <div className={style.number}>4</div>
            }
               
            
            
        </div>
    );
};

export default Notifications;