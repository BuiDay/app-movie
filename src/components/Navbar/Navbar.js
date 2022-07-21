import React from 'react';
import './Navbar.css';
import { BsSearch} from 'react-icons/bs';

import Logo from '../../assets/images/netflix-logo.png'

const Navbar = () => {
    return (
        <nav>
            <div className='nav__container'>
                <div className='nav__logo'>
                    <img src={Logo} alt=""/>
                </div>
                <div className='nav__search'>
                    <div className='nav__icon'><BsSearch/></div>
                    <input type="text" placeholder='search'/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;