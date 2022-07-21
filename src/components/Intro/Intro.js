import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import './Intro.css'


const Intro = () => {
    const [value, setValue] = useState(true);
    return (
        <div className='intro__container'>
            <ReactPlayer 
                playing = {true}
                loop = {true}
                width = "100%"
                height= "100%"
                url="https://www.youtube.com/watch?v=ulPHag30btQ&ab_channel=Netflix"
                volume= {1}
                muted={value}
                className = 'intro__video'
            />
            <div className='intro__info'>
                <h2 className='intro__title'>Netflix Elite: They/Them</h2>
                <p className='intro__overview'>Netflix Elite Launch Campaign Director: When a group of LGBTQ+ campers arrives at Whistler Camp - a conversion camp run by Owen Whistler (Kevin Bacon) - they are promised a “new sense of freedom” by the end of the week. But as the counselors attempt to psychologically break down each of the campers, a mysterious killer starts claiming victims, and they must reclaim their power if they’re going to survive the horrors of the camp. </p>
            </div>
            <div className='intro__icon' onClick={()=>setValue(!value)}>
                {value ? <VscMute/> : <VscUnmute/>}
            </div>
            <div className='intro__fadeBottom'></div>
        </div>
    );
};

export default Intro;