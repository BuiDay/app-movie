import React from 'react';
import style from '../Navbar/UserStyle.module.scss'
import { FaCaretDown } from 'react-icons/fa'
import Avatar from '../../assets/images/avatar.png'
import { AiOutlineSetting } from 'react-icons/ai'
import { VscSignOut } from 'react-icons/vsc'
import { useState,useRef,useEffect } from 'react';

const User = () => {

    const isShow = useRef();
    const [show, setShow] = useState('');
   
    const handleShow = (e) =>{
        setShow(isShow.current.contains(e.target));
    }

    useEffect(()=>{
        if(show){
            document.addEventListener('click',handleShow);
            
        }else{
            document.removeEventListener('click',handleShow);
        }
    },[show])

    return (
        <div className={style.avatar} ref={isShow} onClick={(e) => handleShow(e)}>
            <div className={style.avatar__circle}><img src={Avatar} alt="" /></div>
            <div className={style.avatar__icon}><FaCaretDown /></div>
            {
                show ? (
                    <div className={style.avatar__listItems}>
                        <div className={style.avatar__item}>
                            <div className={style.item__icon}><AiOutlineSetting /></div>
                            <div className={style.item__name}>Setting</div>
                        </div>
                        <div className={style.avatar__item}>
                            <div className={style.item__icon}><VscSignOut /></div>
                            <div className={style.item__name}>Sign Out</div>
                        </div>
                    </div>
                ) : ''
            }


        </div>
    );
};

export default User;