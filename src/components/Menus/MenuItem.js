import React from 'react';
import {Link} from 'react-scroll'

const MenuItem = (prop) => {

    const randomColors = (a)=>{
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        let color = `rgba(${r}, ${g}, ${b}, ${a})`;
        return color;
    }
      
    const {Icon, Text, to} = prop;
    return (
        <Link className='menuItem'
            to={to}
            smooth = "true"
            offset = {-70}
            duration = {500}
            activeClass = 'active'
        >
            <Icon className='icon' style={{color: randomColors(1)}}/>
            <div className="text">{Text}</div>
        </Link>
    );



};

export default MenuItem;