import React from 'react';
import style from '../Navbar/UserStyle.module.scss'
import { FaCaretDown } from 'react-icons/fa'
import Avatar from '../../assets/images/avatar.png'
import { AiOutlineSetting } from 'react-icons/ai'
import { VscSignOut } from 'react-icons/vsc'
import { useState } from 'react';

const User = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div className={style.avatar} onClick={(e) => handleShow(e)}>
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