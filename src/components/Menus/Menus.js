import React from 'react';
import { FaHome, FaHotjar,FaStar} from 'react-icons/fa';
import { GiNinjaHeroicStance, GiGhost, GiRomanToga, GiBandageRoll} from 'react-icons/gi';
import { MdTheaterComedy } from 'react-icons/md';
import MenuItem from './MenuItem';

import './Menus.css'

const Menus = () => {

    return (
       <div className='menuPanel'>
            <MenuItem Icon={FaHome} Text={'Home'} to='NetflixOriginals'/>
            <MenuItem Icon={FaHotjar} Text={'Trending'} to='Trending'/>
            <MenuItem Icon={FaStar} Text={'Top Rate'} to='TopRate'/>
            <MenuItem Icon={GiNinjaHeroicStance} Text={'Actions Movies'} to='Action' />
            <MenuItem Icon={MdTheaterComedy} Text={'Comedy Movies'} to='Comedy'/>
            <MenuItem Icon={GiGhost} Text={'Horror Movies'} to='Horror'/>
            <MenuItem Icon={GiRomanToga} Text={'Romance Movies'} to='Romance'/>
            <MenuItem Icon={GiBandageRoll} Text={'Documentaries'} to='Documentaries'/>
        </div>
    );
};

export default Menus;