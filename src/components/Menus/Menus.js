import React from 'react';
import { FaHome, FaHotjar, FaStar, } from 'react-icons/fa';
import { GiNinjaHeroicStance, GiGhost, GiRomanToga, GiBandageRoll} from 'react-icons/gi';
import { MdTheaterComedy } from 'react-icons/md';
import MenuItem from './MenuItem';

import './Menus.css'

const Menus = () => {

    return (
       <div className='menuPanel'>
            <MenuItem Icon={FaHome} Text={'Home'}/>
            <MenuItem Icon={FaHotjar} Text={'Trending'}/>
            <MenuItem Icon={GiNinjaHeroicStance} Text={'Actions Movies'}/>
            <MenuItem Icon={MdTheaterComedy} Text={'Comedy Movies'}/>
            <MenuItem Icon={GiGhost} Text={'Horror Movies'}/>
            <MenuItem Icon={GiRomanToga} Text={'Romance Movies'}/>
            <MenuItem Icon={GiBandageRoll} Text={'Documentaries'}/>
        </div>
    );
};

export default Menus;