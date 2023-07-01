import React from 'react';
import icon from '../../assets/sliderIcons/photo.png'
import './style.sass'

const Photo = () => {
    return (
            <img style={{
                width: 32,
                padding: 5,
            }} src={icon} alt="" />
    );
};

export default Photo;