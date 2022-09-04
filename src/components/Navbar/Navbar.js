import React, { useState } from 'react';
import style from '../Navbar/NavbarStyle.module.scss'
import { BsSearch } from 'react-icons/bs';
import Logo from '../../assets/images/netflix-logo.png'
import Notifications from './Notifications';
import User from './User';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom'
import { FaGift} from 'react-icons/fa'
import { Link } from 'react-router-dom';




const Navbar = () => {

    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();

    const handleChangeInput = (e) => {
        let keyword = e.target.value;
        setKeywords(keyword);
        if (keyword.length > 0) {
            navigate(`/search?keywords=${keyword.trim()}`)
        }
        else {
            navigate('/');
        }
    }

    const goHome = () => {
        navigate('/');
        setKeywords('');
    }

    return (
        <nav>
            <div className={style.nav__container}>
                <div className={style.nav__left}>
                    <div className={style.nav__logo} onClick={goHome} style={{ cursor: 'pointer' }}>
                        <img src={Logo} alt="" />
                    </div>
                    <div className={style.nav__search}>
                        <div className={style.nav__icon}><BsSearch /></div>
                        <input type="text" placeholder='search' onChange={handleChangeInput} value={keywords} />
                    </div>
                </div>

                <div className={style.nav__right}>
                    <div className={style.list__items}>
                        <Link className={style.name__items} to={'/'}> <p>Home</p> </Link>
                        <Link className={style.name__items} to={'/tvshow/page/1'}> <p>TV Show</p> </Link>
                        <Link className={style.name__items} to={'/movies/page/1'}> <p>Movies</p> </Link>
                        <div className={style.name__items}><p>Latest</p></div>
                        <div className={clsx(style.name__items, style.icon)}><FaGift/></div>
                        <div className={style.name__items}> <Notifications /></div>
                        <User />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;