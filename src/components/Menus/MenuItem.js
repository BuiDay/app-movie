import React from 'react';

const MenuItem = (prop) => {

    const randomColors = (a)=>{
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        let color = `rgba(${r}, ${g}, ${b}, ${a})`;
        return color;
    }
      
    const {Icon, Text} = prop;
    return (
        <div className='menuItem'>
            <Icon className='icon' style={{color: randomColors(1)}}/>
            <div className="text">{Text}</div>
        </div>
    );



};

export default MenuItem;