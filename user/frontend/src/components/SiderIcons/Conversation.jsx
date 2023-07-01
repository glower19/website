import React from 'react';
import icon from '../../assets/sliderIcons/conversation.png'
import './style.sass'

const Conversation = () => {
    return (
        <img style={{
            width: 32,
            padding: 10,
            backgroundColor: '#B54D02',
            borderRadius: '50%'
        }} src={icon} alt="" />
    );
};

export default Conversation;