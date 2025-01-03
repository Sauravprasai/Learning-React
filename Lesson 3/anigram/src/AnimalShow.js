import {useState} from 'react';
import './AnimalShow.css'
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = {
    bird, cat, cow, dog, gator, heart, horse
};

function AnimalShow({type}){
    const [clicks,setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks+1)
    };

    return (
        <div onClick={handleClick} className='animal-show'>
            <img alt="animal" src={svgMap[type]} className='animal'></img>
            <img alt="heart" src={heart} style={{width: 10+ 10*clicks}} className='heart'></img>  
        </div>
    )
}

export default AnimalShow