import React, { useState } from 'react';
import './Navbar.css';
import { BsSearch} from 'react-icons/bs';
import Logo from '../../assets/images/netflix-logo.png'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

    const [keywords, setKeywords] = useState('');
    const navigate = useNavigate();

    const handleChangeInput = (e) =>{
        let keyword = e.target.value;
        setKeywords(keyword);
        if(keyword.length > 0){
            navigate(`/search?keywords=${keyword.trim()}`)
        }
        else{
            navigate('/');
        }
    }

    const goHome = () =>{
        navigate('/');
        setKeywords('');
    }

    return (
        <nav>
            <div className='nav__container'>
                <div className='nav__logo' onClick={goHome} style={{cursor:'pointer'}}>
                    <img src={Logo} alt=""/>
                </div>
                <div className='nav__search'>
                    <div className='nav__icon'><BsSearch/></div>
                    <input type="text" placeholder='search' onChange={handleChangeInput} value={keywords}/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;